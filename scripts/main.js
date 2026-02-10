const updateYear = () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

updateYear();

const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('[data-theme-label]');

const getThemeLabel = (theme) => {
  const translate = window.i18n?.t;
  if (theme === 'dark') {
    return translate ? translate('theme.light') : 'Light mode';
  }
  return translate ? translate('theme.dark') : 'Dark mode';
};

const preferredTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)').matches
  : false;
const initialTheme = preferredTheme || (prefersDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', initialTheme);
if (themeToggle) {
  themeToggle.setAttribute('aria-pressed', initialTheme === 'dark');
}
if (themeLabel) {
  themeLabel.textContent = getThemeLabel(initialTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    themeToggle.setAttribute('aria-pressed', nextTheme === 'dark');
    if (themeLabel) {
      themeLabel.textContent = getThemeLabel(nextTheme);
    }
  });
}

document.addEventListener('languageChanged', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (themeLabel) {
    themeLabel.textContent = getThemeLabel(currentTheme);
  }
  updateYear();
  if (statsCache) {
    renderStats(statsCache);
  }
});

let statsCache = null;

const getTranslation = (key, fallback) => {
  const translate = window.i18n?.t;
  if (translate) {
    return translate(key);
  }
  return fallback;
};

const formatNumber = (value) => {
  if (value === null || value === undefined) {
    return '—';
  }
  const locale = document.documentElement.lang || undefined;
  return new Intl.NumberFormat(locale).format(value);
};

const formatDate = (isoString) => {
  if (!isoString) {
    return getTranslation('stats.updated.pending', 'Pending update');
  }
  const locale = document.documentElement.lang || undefined;
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return getTranslation('stats.updated.pending', 'Pending update');
  }
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date);
};

const createLanguageItem = (language) => {
  const item = document.createElement('li');
  item.className = 'stats-item';

  const header = document.createElement('div');
  header.className = 'stats-item-header';

  const label = document.createElement('span');
  label.className = 'stats-item-label';
  label.textContent = language.name;

  const value = document.createElement('span');
  value.className = 'stats-item-value';
  value.textContent = `${language.percent}%`;

  header.appendChild(label);
  header.appendChild(value);

  const bar = document.createElement('div');
  bar.className = 'stats-bar';
  const barFill = document.createElement('span');
  barFill.style.width = `${language.percent}%`;
  bar.appendChild(barFill);

  item.appendChild(header);
  item.appendChild(bar);
  return item;
};

const createCommitItem = (commit) => {
  const item = document.createElement('li');
  item.className = 'stats-commit';

  const title = document.createElement('strong');
  title.textContent = `${commit.repo} · ${commit.message}`;

  const meta = document.createElement('small');
  meta.textContent = formatDate(commit.date);

  item.appendChild(title);
  item.appendChild(meta);
  return item;
};

const renderStats = (data) => {
  const root = document.querySelector('[data-stats-root]');
  if (!root || !data) {
    return;
  }

  const followers = root.querySelector('[data-stat="followers"]');
  const repos = root.querySelector('[data-stat="public-repos"]');
  const stars = root.querySelector('[data-stat="stars"]');
  const updated = root.querySelector('[data-stat="updated"]');
  const languagesList = root.querySelector('[data-stat="top-languages"]');
  const commitsList = root.querySelector('[data-stat="recent-commits"]');

  if (followers) {
    followers.textContent = formatNumber(data.followers);
  }
  if (repos) {
    repos.textContent = formatNumber(data.public_repos);
  }
  if (stars) {
    stars.textContent = formatNumber(data.stars_total);
  }
  if (updated) {
    updated.textContent = formatDate(data.generated_at);
  }

  if (languagesList) {
    languagesList.innerHTML = '';
    if (Array.isArray(data.top_languages) && data.top_languages.length > 0) {
      data.top_languages.forEach((language) => {
        languagesList.appendChild(createLanguageItem(language));
      });
    } else {
      const emptyItem = document.createElement('li');
      emptyItem.className = 'stats-placeholder';
      emptyItem.textContent = getTranslation('stats.empty', 'No data available yet.');
      languagesList.appendChild(emptyItem);
    }
  }

  if (commitsList) {
    commitsList.innerHTML = '';
    if (Array.isArray(data.recent_commits) && data.recent_commits.length > 0) {
      data.recent_commits.forEach((commit) => {
        commitsList.appendChild(createCommitItem(commit));
      });
    } else {
      const emptyItem = document.createElement('li');
      emptyItem.className = 'stats-placeholder';
      emptyItem.textContent = getTranslation('stats.empty', 'No data available yet.');
      commitsList.appendChild(emptyItem);
    }
  }
};

const initStats = async () => {
  const root = document.querySelector('[data-stats-root]');
  if (!root) {
    return;
  }

  try {
    const response = await fetch('./data/github-stats.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Stats response not OK');
    }
    const data = await response.json();
    statsCache = data;
    renderStats(statsCache);
  } catch (error) {
    statsCache = null;
    const languagesList = root.querySelector('[data-stat="top-languages"]');
    const commitsList = root.querySelector('[data-stat="recent-commits"]');
    const errorMessage = getTranslation('stats.error', 'Unable to load stats right now.');

    if (languagesList) {
      languagesList.innerHTML = '';
      const item = document.createElement('li');
      item.className = 'stats-placeholder';
      item.textContent = errorMessage;
      languagesList.appendChild(item);
    }

    if (commitsList) {
      commitsList.innerHTML = '';
      const item = document.createElement('li');
      item.className = 'stats-placeholder';
      item.textContent = errorMessage;
      commitsList.appendChild(item);
    }
  }
};

initStats();
