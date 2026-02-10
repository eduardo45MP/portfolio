import fs from 'node:fs/promises';
import path from 'node:path';

const OWNER = process.env.GITHUB_USER || 'eduardo45MP';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

const headers = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'portfolio-stats'
};

if (TOKEN) {
  headers.Authorization = `Bearer ${TOKEN}`;
}

const apiFetch = async (endpoint) => {
  const response = await fetch(`https://api.github.com${endpoint}`, { headers });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(`GitHub API error (${response.status}): ${message}`);
  }
  return response;
};

const parseNextLink = (linkHeader) => {
  if (!linkHeader) {
    return null;
  }
  const links = linkHeader.split(',');
  for (const link of links) {
    const match = link.match(/<([^>]+)>;\s*rel="next"/);
    if (match) {
      const url = new URL(match[1]);
      return url.pathname + url.search;
    }
  }
  return null;
};

const fetchAll = async (endpoint) => {
  let results = [];
  let next = endpoint;
  while (next) {
    const response = await apiFetch(next);
    const data = await response.json();
    results = results.concat(data);
    next = parseNextLink(response.headers.get('link'));
  }
  return results;
};

const sumLanguages = (accumulator, languages) => {
  for (const [name, bytes] of Object.entries(languages)) {
    accumulator[name] = (accumulator[name] || 0) + bytes;
  }
};

const main = async () => {
  const userResponse = await apiFetch(`/users/${OWNER}`);
  const user = await userResponse.json();

  const repos = await fetchAll(`/users/${OWNER}/repos?per_page=100&type=owner&sort=updated`);
  const activeRepos = repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

  const starsTotal = activeRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const languageAccumulator = {};
  const languageRepos = activeRepos.slice(0, 20);
  for (const repo of languageRepos) {
    const response = await apiFetch(`/repos/${OWNER}/${repo.name}/languages`);
    const languages = await response.json();
    sumLanguages(languageAccumulator, languages);
  }

  const languageTotal = Object.values(languageAccumulator).reduce((sum, value) => sum + value, 0);
  const topLanguages = Object.entries(languageAccumulator)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percent: languageTotal ? Math.round((bytes / languageTotal) * 100) : 0
    }))
    .sort((a, b) => b.bytes - a.bytes)
    .slice(0, 6);

  const commitRepos = activeRepos.slice(0, 8);
  const commitResults = [];
  for (const repo of commitRepos) {
    const response = await apiFetch(`/repos/${OWNER}/${repo.name}/commits?per_page=5`);
    const commits = await response.json();
    commits.forEach((commit) => {
      if (!commit?.commit?.author?.date) {
        return;
      }
      commitResults.push({
        repo: repo.name,
        message: commit.commit.message.split('\n')[0],
        sha: commit.sha.slice(0, 7),
        date: commit.commit.author.date,
        url: commit.html_url
      });
    });
  }

  const recentCommits = commitResults
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8);

  const output = {
    generated_at: new Date().toISOString(),
    followers: user.followers,
    public_repos: user.public_repos,
    stars_total: starsTotal,
    top_languages: topLanguages,
    recent_commits: recentCommits
  };

  const outputPath = path.join(process.cwd(), 'data', 'github-stats.json');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(output, null, 2));
  console.log(`Stats generated for ${OWNER}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
