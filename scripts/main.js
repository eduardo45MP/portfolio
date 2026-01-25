const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('[data-theme-label]');
const languageToggle = document.querySelector('[data-lang-toggle]');
const languageOptions = document.querySelectorAll('[data-lang-option]');

const preferredTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)').matches
  : false;
const initialTheme = preferredTheme || (prefersDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', initialTheme);
if (themeToggle) {
  themeToggle.setAttribute('aria-pressed', initialTheme === 'dark');
}

const baseTranslations = {
  en: {
    'theme.light': 'Light mode',
    'theme.dark': 'Dark mode',
    'lang.toggle.pt': 'Switch language to Portuguese',
    'lang.toggle.en': 'Switch language to English',
  },
  pt: {
    'theme.light': 'Modo claro',
    'theme.dark': 'Modo escuro',
    'lang.toggle.pt': 'Mudar idioma para português',
    'lang.toggle.en': 'Mudar idioma para inglês',
  },
  edu_assistant: {
    en: {
      'meta.title': 'edu_assistant | Voice Ops Companion',
      'meta.description':
        'EduAssistant is a personal voice assistant with local memory, lightweight automation, and tailored integrations.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Project navigation',
      'nav.overview': 'Overview',
      'nav.stack': 'Stack',
      'nav.installation': 'Installation',
      'nav.contributions': 'Contributions',
      'hero.badge': 'Personal assistant',
      'hero.description':
        'A local voice assistant with contextual memory and bespoke integrations for routines, projects, and personal automations.',
      'hero.cta.github': 'View on GitHub',
      'hero.cta.install': 'Run it locally',
      'hero.highlights.diff.title': 'Differential',
      'hero.highlights.diff.body':
        'Privacy-first, local control, and low-cost APIs for everyday automation.',
      'hero.highlights.status.title': 'Status',
      'hero.highlights.status.body':
        'Active roadmap with new flows, integrations, and offline mode in progress.',
      'hero.card.label': 'Quick highlights',
      'hero.card.interactions.title': 'Interactions',
      'hero.card.interactions.body':
        'Voice input via Whisper, spoken answers with Edge TTS, conversational processing with GPT-3.5.',
      'hero.card.memory.title': 'Lightweight memory',
      'hero.card.memory.body':
        'Local JSON for preferences, agenda, and quick history, with FAISS planned next.',
      'hero.card.license.title': 'License',
      'hero.card.license.body':
        'MIT · contributions welcome for automation modules, UX, and offline support.',
      'overview.eyebrow': 'Overview',
      'overview.title': 'A home copilot connected to your local ecosystem',
      'overview.description':
        'The project was created to manage routines, calendars, and projects without exposing sensitive data to external services. Everything runs on the user machine.',
      'overview.list.1': 'Natural voice commands with fast, accurate transcription.',
      'overview.list.2': 'Spoken responses ready for continuous, accessible interaction.',
      'overview.list.3': 'Persistent memory of preferences, recurring tasks, and important files.',
      'overview.list.4': 'Extensible codebase for custom automations via Python scripts.',
      'stack.eyebrow': 'Technical stack',
      'stack.title': 'Lean infrastructure built to evolve',
      'stack.description':
        'Decoupled components allow future swaps (local LLMs, new TTS, external agendas) without rewriting the project.',
      'stack.cards.python.title': 'Python core',
      'stack.cards.python.body':
        'Modules organised by responsibility, following best practices and ready for future test coverage.',
      'stack.cards.python.meta1': '3.10+',
      'stack.cards.python.meta2': 'venv',
      'stack.cards.python.meta3': 'CLI',
      'stack.cards.voice.title': 'Voice input and output',
      'stack.cards.voice.body':
        'Transcription with Whisper API and synthesis via Edge TTS, keeping operational costs low.',
      'stack.cards.voice.meta1': 'openai',
      'stack.cards.voice.meta2': 'edge-tts',
      'stack.cards.context.title': 'Smart context',
      'stack.cards.context.body': 'GPT-3.5-turbo integration with vector memory plans via FAISS.',
      'stack.cards.context.meta1': 'gpt_client.py',
      'stack.cards.context.meta2': 'faiss',
      'architecture.eyebrow': 'Architecture',
      'architecture.title': 'Componentised by responsibility',
      'architecture.description':
        'Each folder holds an isolated layer (input, output, memory, data), simplifying maintenance and extensions.',
      'installation.eyebrow': 'Installation',
      'installation.title': 'Set up your assistant in minutes',
      'installation.description':
        'Follow the steps to prepare your environment, credentials, and start the conversational flow on desktop.',
      'installation.step1': 'Clone the repository and create a virtual environment:',
      'installation.step2': 'Install dependencies:',
      'installation.step3': 'Copy the example file and add your keys:',
      'installation.step4': 'Run the assistant:',
      'installation.note':
        'Switch to text-only mode by replacing audio capture with CLI input if you do not have a microphone available.',
      'contributions.eyebrow': 'Open Source',
      'contributions.title': 'Contribute new modules and automations',
      'contributions.description':
        'Suggestions and PRs are welcome, especially for offline support, new integrations, and UX.',
      'contributions.cards.integrations.title': 'Integrations',
      'contributions.cards.integrations.body':
        'Connect external calendars, email services, or productivity platforms.',
      'contributions.cards.integrations.meta1': 'Google Calendar',
      'contributions.cards.integrations.meta2': 'Notion',
      'contributions.cards.offline.title': 'Offline mode',
      'contributions.cards.offline.body':
        'Explore local LLMs (Ollama, LM Studio) and open-source STT/TTS options.',
      'contributions.cards.offline.meta1': 'Whisper.cpp',
      'contributions.cards.offline.meta2': 'Coqui TTS',
      'contributions.cards.ux.title': 'User experience',
      'contributions.cards.ux.body':
        'Build desktop/mobile interfaces or web dashboards to monitor the assistant in real time.',
      'contributions.cards.ux.meta1': 'Electron',
      'contributions.cards.ux.meta2': 'Next.js',
      'contributions.note.prefix': 'Keep the visual identity standards described in',
      'contributions.note.middle': 'and follow',
      'contributions.note.suffix': 'to align contributions with current priorities.',
    },
    pt: {
      'meta.title': 'edu_assistant | Assistente de voz',
      'meta.description':
        'EduAssistant é um assistente de voz pessoal com memória local, automação leve e integrações sob medida.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Navegação do projeto',
      'nav.overview': 'Visão geral',
      'nav.stack': 'Stack',
      'nav.installation': 'Instalação',
      'nav.contributions': 'Contribuições',
      'hero.badge': 'Assistente pessoal',
      'hero.description':
        'Um assistente de voz local com memória contextual e integrações sob medida para rotinas, projetos e automações pessoais.',
      'hero.cta.github': 'Ver no GitHub',
      'hero.cta.install': 'Executar localmente',
      'hero.highlights.diff.title': 'Diferencial',
      'hero.highlights.diff.body':
        'Privacidade em primeiro lugar, controle local e APIs de baixo custo para automações do dia a dia.',
      'hero.highlights.status.title': 'Status',
      'hero.highlights.status.body':
        'Roadmap ativo com novos fluxos, integrações e modo offline em andamento.',
      'hero.card.label': 'Destaques rápidos',
      'hero.card.interactions.title': 'Interações',
      'hero.card.interactions.body':
        'Entrada de voz via Whisper, respostas faladas com Edge TTS e processamento conversacional com GPT-3.5.',
      'hero.card.memory.title': 'Memória leve',
      'hero.card.memory.body':
        'JSON local para preferências, agenda e histórico rápido, com FAISS planejado em seguida.',
      'hero.card.license.title': 'Licença',
      'hero.card.license.body':
        'MIT · contribuições bem-vindas para módulos de automação, UX e suporte offline.',
      'overview.eyebrow': 'Visão geral',
      'overview.title': 'Um copiloto doméstico conectado ao seu ecossistema local',
      'overview.description':
        'O projeto foi criado para gerenciar rotinas, calendários e projetos sem expor dados sensíveis a serviços externos. Tudo roda na máquina do usuário.',
      'overview.list.1': 'Comandos de voz naturais com transcrição rápida e precisa.',
      'overview.list.2': 'Respostas faladas prontas para interação contínua e acessível.',
      'overview.list.3': 'Memória persistente de preferências, tarefas recorrentes e arquivos importantes.',
      'overview.list.4': 'Base de código extensível para automações personalizadas via scripts Python.',
      'stack.eyebrow': 'Stack técnica',
      'stack.title': 'Infraestrutura enxuta pronta para evoluir',
      'stack.description':
        'Componentes desacoplados permitem trocas futuras (LLMs locais, novos TTS, agendas externas) sem reescrever o projeto.',
      'stack.cards.python.title': 'Núcleo em Python',
      'stack.cards.python.body':
        'Módulos organizados por responsabilidade, seguindo boas práticas e prontos para cobertura de testes futura.',
      'stack.cards.python.meta1': '3.10+',
      'stack.cards.python.meta2': 'venv',
      'stack.cards.python.meta3': 'CLI',
      'stack.cards.voice.title': 'Entrada e saída de voz',
      'stack.cards.voice.body':
        'Transcrição com Whisper API e síntese via Edge TTS, mantendo custos operacionais baixos.',
      'stack.cards.voice.meta1': 'openai',
      'stack.cards.voice.meta2': 'edge-tts',
      'stack.cards.context.title': 'Contexto inteligente',
      'stack.cards.context.body': 'Integração com GPT-3.5-turbo com planos de memória vetorial via FAISS.',
      'stack.cards.context.meta1': 'gpt_client.py',
      'stack.cards.context.meta2': 'faiss',
      'architecture.eyebrow': 'Arquitetura',
      'architecture.title': 'Componentizado por responsabilidade',
      'architecture.description':
        'Cada pasta guarda uma camada isolada (entrada, saída, memória, dados), simplificando manutenção e extensões.',
      'installation.eyebrow': 'Instalação',
      'installation.title': 'Configure seu assistente em minutos',
      'installation.description':
        'Siga os passos para preparar o ambiente, credenciais e iniciar o fluxo conversacional no desktop.',
      'installation.step1': 'Clone o repositório e crie um ambiente virtual:',
      'installation.step2': 'Instale as dependências:',
      'installation.step3': 'Copie o arquivo de exemplo e adicione suas chaves:',
      'installation.step4': 'Execute o assistente:',
      'installation.note':
        'Troque para modo somente texto substituindo a captura de áudio por entrada via CLI se você não tiver microfone.',
      'contributions.eyebrow': 'Código aberto',
      'contributions.title': 'Contribua com novos módulos e automações',
      'contributions.description':
        'Sugestões e PRs são bem-vindos, especialmente para suporte offline, novas integrações e UX.',
      'contributions.cards.integrations.title': 'Integrações',
      'contributions.cards.integrations.body':
        'Conecte calendários externos, serviços de e-mail ou plataformas de produtividade.',
      'contributions.cards.integrations.meta1': 'Google Calendar',
      'contributions.cards.integrations.meta2': 'Notion',
      'contributions.cards.offline.title': 'Modo offline',
      'contributions.cards.offline.body':
        'Explore LLMs locais (Ollama, LM Studio) e opções de STT/TTS open-source.',
      'contributions.cards.offline.meta1': 'Whisper.cpp',
      'contributions.cards.offline.meta2': 'Coqui TTS',
      'contributions.cards.ux.title': 'Experiência do usuário',
      'contributions.cards.ux.body':
        'Crie interfaces desktop/mobile ou dashboards web para monitorar o assistente em tempo real.',
      'contributions.cards.ux.meta1': 'Electron',
      'contributions.cards.ux.meta2': 'Next.js',
      'contributions.note.prefix': 'Mantenha os padrões de identidade visual descritos em',
      'contributions.note.middle': 'e siga',
      'contributions.note.suffix': 'para alinhar contribuições às prioridades atuais.',
    },
  },
  ai_studies: {
    en: {
      'meta.title': 'AI_studies | AI Lab',
      'meta.description':
        'AI_studies is the public lab for Eduardo45MP.dev to explore and document artificial intelligence experiments.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Project navigation',
      'nav.overview': 'Overview',
      'nav.stack': 'Stack',
      'nav.installation': 'Installation',
      'nav.contributions': 'Contributions',
      'hero.badge': 'AI lab',
      'hero.description':
        'A repository dedicated to consolidating AI studies and prototypes, exploring machine learning, deep learning, NLP, computer vision, and generative models.',
      'hero.cta.github': 'View on GitHub',
      'hero.cta.start': 'Quick start guide',
      'hero.highlights.purpose.title': 'Purpose',
      'hero.highlights.purpose.body':
        'Document continuous AI learning and keep a living archive of notebooks, datasets, and utility scripts.',
      'hero.highlights.status.title': 'Status',
      'hero.highlights.status.body': 'Open to experiments, contributions, and community-led evolution.',
      'hero.card.label': 'Quick highlights',
      'hero.card.focus.title': 'Current focus',
      'hero.card.focus.body':
        'Predictive models, compact LLM fine-tuning, and prototypes for intelligent automations.',
      'hero.card.org.title': 'Organisation',
      'hero.card.org.body':
        'Modular structure with folders for notebooks, datasets, trained models, and reusable scripts.',
      'hero.card.license.title': 'License',
      'hero.card.license.body': 'MIT · Free to use, modify, and distribute with credit.',
      'overview.eyebrow': 'Overview',
      'overview.title': 'Explore, test, and document artificial intelligence',
      'overview.description':
        'AI_studies works as a central lab for experiments. Each learning cycle is documented for reuse and sharing with other developers.',
      'overview.list.1': 'Curated notebooks that demonstrate AI techniques on real-world problems.',
      'overview.list.2': 'Versioned datasets to ensure reproducibility and future comparisons.',
      'overview.list.3': 'Utility scripts that automate training, evaluation, and visualisation pipelines.',
      'overview.list.4':
        'Transparent roadmap with topics like generative models, time series, and intelligent recommendations.',
      'stack.eyebrow': 'Technical stack',
      'stack.title': 'Modern tools for rapid experimentation',
      'stack.description':
        'The base combines the Python ecosystem with established frameworks for machine learning, visualisation, and data processing.',
      'stack.cards.python.title': 'Python 3.10+',
      'stack.cards.python.body':
        'Main environment for notebooks, scripts, and scientific library integration.',
      'stack.cards.python.meta1': 'Virtualenv',
      'stack.cards.python.meta2': 'pip',
      'stack.cards.python.meta3': 'Poetry (optional)',
      'stack.cards.frameworks.title': 'AI frameworks',
      'stack.cards.frameworks.body':
        'PyTorch, TensorFlow, Hugging Face Transformers, and Scikit-learn for supervised and generative training.',
      'stack.cards.frameworks.meta1': 'torch',
      'stack.cards.frameworks.meta2': 'tensorflow',
      'stack.cards.frameworks.meta3': 'transformers',
      'stack.cards.data.title': 'Data & visualisation',
      'stack.cards.data.body':
        'Pandas, NumPy, and Matplotlib for efficient data manipulation and analytics dashboards.',
      'stack.cards.data.meta1': 'pandas',
      'stack.cards.data.meta2': 'numpy',
      'stack.cards.data.meta3': 'matplotlib',
      'architecture.eyebrow': 'Architecture',
      'architecture.title': 'Structure designed to scale without losing order',
      'architecture.description':
        'Each experiment lives in its own folder, making replication, comparisons, and future publishing easier.',
      'installation.eyebrow': 'Installation',
      'installation.title': 'Start your tests with a few commands',
      'installation.description':
        'The repository is lightweight and can be used locally, in Google Colab, or in cloud environments.',
      'installation.step1': 'Clone the repository and enter the folder:',
      'installation.step2': 'Create and activate a Python virtual environment:',
      'installation.step3': 'Install the dependencies needed for each notebook or script:',
      'installation.note.prefix':
        'Use Google Colab for quick tests by sharing notebooks directly from the',
      'installation.note.suffix': 'folder.',
      'contributions.eyebrow': 'Open Source',
      'contributions.title': 'How to contribute to AI_studies',
      'contributions.description':
        'The project values collaborative contributions that document experiments, improve datasets, or propose new challenges.',
      'contributions.cards.experiments.title': 'New experiments',
      'contributions.cards.experiments.body':
        'Bring well-documented notebooks with insights and model comparisons.',
      'contributions.cards.experiments.meta1': 'Fork + PR',
      'contributions.cards.experiments.meta2': 'Docstring',
      'contributions.cards.datasets.title': 'Curated datasets',
      'contributions.cards.datasets.body':
        'Include public or synthetic datasets with a README covering license, format, and usage.',
      'contributions.cards.datasets.meta1': 'CC-BY',
      'contributions.cards.datasets.meta2': 'MIT',
      'contributions.cards.scripts.title': 'Utility scripts',
      'contributions.cards.scripts.body':
        'Automate training, evaluation, or deployment flows and share best practices.',
      'contributions.cards.scripts.meta1': 'CI/CD',
      'contributions.cards.scripts.meta2': 'pytest optional',
      'contributions.note.prefix':
        'Open an issue with the contribution scope before the PR for quick alignment. Also review the documents in',
      'contributions.note.suffix': 'to keep the visual and narrative pattern aligned.',
    },
    pt: {
      'meta.title': 'AI_studies | Laboratório de IA',
      'meta.description':
        'AI_studies é o laboratório público do Eduardo45MP.dev para explorar e documentar experimentos em inteligência artificial.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Navegação do projeto',
      'nav.overview': 'Visão geral',
      'nav.stack': 'Stack',
      'nav.installation': 'Instalação',
      'nav.contributions': 'Contribuições',
      'hero.badge': 'Laboratório de IA',
      'hero.description':
        'Repositório dedicado a consolidar estudos e protótipos de IA, explorando machine learning, deep learning, NLP, visão computacional e modelos generativos.',
      'hero.cta.github': 'Ver no GitHub',
      'hero.cta.start': 'Guia rápido',
      'hero.highlights.purpose.title': 'Propósito',
      'hero.highlights.purpose.body':
        'Documentar aprendizado contínuo em IA e manter um arquivo vivo de notebooks, datasets e scripts utilitários.',
      'hero.highlights.status.title': 'Status',
      'hero.highlights.status.body': 'Aberto a experimentos, contribuições e evolução liderada pela comunidade.',
      'hero.card.label': 'Destaques rápidos',
      'hero.card.focus.title': 'Foco atual',
      'hero.card.focus.body':
        'Modelos preditivos, fine-tuning compacto de LLMs e protótipos de automações inteligentes.',
      'hero.card.org.title': 'Organização',
      'hero.card.org.body':
        'Estrutura modular com pastas para notebooks, datasets, modelos treinados e scripts reutilizáveis.',
      'hero.card.license.title': 'Licença',
      'hero.card.license.body': 'MIT · Livre para usar, modificar e distribuir com crédito.',
      'overview.eyebrow': 'Visão geral',
      'overview.title': 'Explorar, testar e documentar inteligência artificial',
      'overview.description':
        'AI_studies funciona como um laboratório central de experimentos. Cada ciclo de aprendizado é documentado para reutilização e compartilhamento com outros desenvolvedores.',
      'overview.list.1': 'Notebooks curados que demonstram técnicas de IA em problemas reais.',
      'overview.list.2': 'Datasets versionados para garantir reprodutibilidade e comparações futuras.',
      'overview.list.3': 'Scripts utilitários que automatizam pipelines de treino, avaliação e visualização.',
      'overview.list.4':
        'Roadmap transparente com temas como modelos generativos, séries temporais e recomendações inteligentes.',
      'stack.eyebrow': 'Stack técnica',
      'stack.title': 'Ferramentas modernas para experimentação rápida',
      'stack.description':
        'A base combina o ecossistema Python com frameworks consolidados para machine learning, visualização e processamento de dados.',
      'stack.cards.python.title': 'Python 3.10+',
      'stack.cards.python.body':
        'Ambiente principal para notebooks, scripts e integração com bibliotecas científicas.',
      'stack.cards.python.meta1': 'Virtualenv',
      'stack.cards.python.meta2': 'pip',
      'stack.cards.python.meta3': 'Poetry (opcional)',
      'stack.cards.frameworks.title': 'Frameworks de IA',
      'stack.cards.frameworks.body':
        'PyTorch, TensorFlow, Hugging Face Transformers e Scikit-learn para treino supervisionado e generativo.',
      'stack.cards.frameworks.meta1': 'torch',
      'stack.cards.frameworks.meta2': 'tensorflow',
      'stack.cards.frameworks.meta3': 'transformers',
      'stack.cards.data.title': 'Dados & visualização',
      'stack.cards.data.body':
        'Pandas, NumPy e Matplotlib para manipulação eficiente de dados e painéis analíticos.',
      'stack.cards.data.meta1': 'pandas',
      'stack.cards.data.meta2': 'numpy',
      'stack.cards.data.meta3': 'matplotlib',
      'architecture.eyebrow': 'Arquitetura',
      'architecture.title': 'Estrutura projetada para escalar sem perder ordem',
      'architecture.description':
        'Cada experimento vive em sua própria pasta, facilitando replicações, comparações e publicações futuras.',
      'installation.eyebrow': 'Instalação',
      'installation.title': 'Inicie seus testes com poucos comandos',
      'installation.description':
        'O repositório é leve e pode ser usado localmente, no Google Colab ou em ambientes de nuvem.',
      'installation.step1': 'Clone o repositório e entre na pasta:',
      'installation.step2': 'Crie e ative um ambiente virtual Python:',
      'installation.step3': 'Instale as dependências necessárias para cada notebook ou script:',
      'installation.note.prefix':
        'Use o Google Colab para testes rápidos compartilhando notebooks diretamente da pasta',
      'installation.note.suffix': '.',
      'contributions.eyebrow': 'Código aberto',
      'contributions.title': 'Como contribuir com o AI_studies',
      'contributions.description':
        'O projeto valoriza contribuições colaborativas que documentem experimentos, melhorem datasets ou proponham novos desafios.',
      'contributions.cards.experiments.title': 'Novos experimentos',
      'contributions.cards.experiments.body':
        'Traga notebooks bem documentados com insights e comparações de modelos.',
      'contributions.cards.experiments.meta1': 'Fork + PR',
      'contributions.cards.experiments.meta2': 'Docstring',
      'contributions.cards.datasets.title': 'Datasets curados',
      'contributions.cards.datasets.body':
        'Inclua datasets públicos ou sintéticos com README cobrindo licença, formato e uso.',
      'contributions.cards.datasets.meta1': 'CC-BY',
      'contributions.cards.datasets.meta2': 'MIT',
      'contributions.cards.scripts.title': 'Scripts utilitários',
      'contributions.cards.scripts.body':
        'Automatize fluxos de treino, avaliação ou deploy e compartilhe boas práticas.',
      'contributions.cards.scripts.meta1': 'CI/CD',
      'contributions.cards.scripts.meta2': 'pytest opcional',
      'contributions.note.prefix':
        'Abra uma issue com o escopo da contribuição antes do PR para alinhamento rápido. Também revise os documentos em',
      'contributions.note.suffix': 'para manter o padrão visual e narrativo alinhado.',
    },
  },
  nsa: {
    en: {
      'meta.title': 'NSA | Network Security Assistant',
      'meta.description':
        'NSA (Network Security Assistant) helps assess Wi-Fi networks with scans, analysis, and reports.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Project navigation',
      'nav.overview': 'Overview',
      'nav.stack': 'Stack',
      'nav.installation': 'Installation',
      'nav.contributions': 'Contributions',
      'hero.badge': 'Network security',
      'hero.title': 'NSA | Network Security Assistant',
      'hero.description':
        'A modular toolkit that tests, analyses, and strengthens Wi-Fi networks with clear flows for scanning, assessment, and report generation.',
      'hero.cta.github': 'View on GitHub',
      'hero.cta.usage': 'Usage checklist',
      'hero.highlights.scope.title': 'Scope',
      'hero.highlights.scope.body':
        'Educational audits on owned networks, focused on common vulnerability detection.',
      'hero.highlights.access.title': 'Access',
      'hero.highlights.access.body':
        'Python scripts executed locally, with administrative privileges when required.',
      'hero.card.label': 'Quick highlights',
      'hero.card.modules.title': 'Core modules',
      'hero.card.modules.body':
        'Wi-Fi scanner, security analysis, PDF reports, and configurable profile management.',
      'hero.card.platform.title': 'Target platform',
      'hero.card.platform.prefix': 'Linux environments; some features require',
      'hero.card.platform.suffix': 'access and specific network libraries.',
      'hero.card.license.title': 'License',
      'hero.card.license.body':
        'MIT · Respect the legal notice: use only on networks with explicit authorisation.',
      'overview.eyebrow': 'Overview',
      'overview.title': 'Practical auditing for home and corporate Wi-Fi networks',
      'overview.description':
        'NSA was created to professionalise home security tests, offering clear, documented scripts that any cybersecurity enthusiast can extend.',
      'overview.list.1':
        'Maps available networks with relevant metadata (BSSID, RSSI, channel, declared security).',
      'overview.list.2': 'Evaluates encryption settings, signal strength, and common risks.',
      'overview.list.3':
        'Generates readable reports with checklists of recommendations and next steps.',
      'overview.list.4': 'Allows saving Wi-Fi profiles to repeat tests in regular cycles.',
      'stack.eyebrow': 'Technical stack',
      'stack.title': 'Python as the base for security automation',
      'stack.description':
        'Networking libraries and report generation form the core of the toolkit, keeping the setup lean and portable.',
      'stack.cards.scan.title': 'Scanning and capture',
      'stack.cards.scan.prefix': 'Uses',
      'stack.cards.scan.suffix': 'to gather interface information.',
      'stack.cards.scan.meta1': 'Monitor mode',
      'stack.cards.scan.meta2': 'iwlist',
      'stack.cards.analysis.title': 'Analysis',
      'stack.cards.analysis.body':
        'Customisable rules to verify encryption types, default passwords, and protection best practices.',
      'stack.cards.analysis.meta1': 'Python ruleset',
      'stack.cards.analysis.meta2': 'config YAML (future)',
      'stack.cards.reports.title': 'Reports',
      'stack.cards.reports.prefix': 'Generates friendly reports with',
      'stack.cards.reports.middle': 'or',
      'stack.cards.reports.suffix': 'depending on the flow.',
      'stack.cards.reports.meta1': 'Export PDF/HTML',
      'stack.cards.reports.meta2': 'Custom templates',
      'architecture.eyebrow': 'Architecture',
      'architecture.title': 'Modular scripts for each step of the process',
      'architecture.description':
        'Clear separation between collection, analysis, reporting, and profile management avoids tight coupling and enables isolated tests.',
      'installation.eyebrow': 'Installation',
      'installation.title': 'Preparing the audit environment',
      'installation.description':
        'Run the scripts on machines that support monitor mode and have the required privileges. Tests were validated on Debian-based Linux distributions.',
      'installation.step1': 'Clone the repository and create a virtual environment:',
      'installation.step2': 'Install suggested dependencies:',
      'installation.step3': 'Run modules as needed:',
      'installation.note':
        'Adjust commands for your environment and ensure write permissions on output directories when generating reports.',
      'contributions.eyebrow': 'Open Source',
      'contributions.title': 'Best practices for collaboration',
      'contributions.description':
        'Contributors can expand security rules, report formats, and support for new platforms.',
      'contributions.cards.heuristics.title': 'New heuristics',
      'contributions.cards.heuristics.body':
        'Add advanced checks to detect frequent insecure configurations.',
      'contributions.cards.heuristics.meta1': 'WPA3',
      'contributions.cards.heuristics.meta2': 'IoT',
      'contributions.cards.reports.title': 'Report templates',
      'contributions.cards.reports.body':
        'Create customisable layouts with charts, checklists, and audience-specific guidance.',
      'contributions.cards.reports.meta1': 'Markdown',
      'contributions.cards.reports.meta2': 'PDF',
      'contributions.cards.tests.title': 'Automated tests',
      'contributions.cards.tests.body':
        'Implement unit tests and mocks to simulate results without real hardware access.',
      'contributions.cards.tests.meta1': 'pytest',
      'contributions.cards.tests.meta2': 'tox',
      'contributions.note.prefix':
        'Before contributing, read the legal notice in the README and keep the visual identity aligned with the guides in',
      'contributions.note.suffix': '.',
      'notice.eyebrow': 'Notice',
      'notice.title': 'Responsible use',
      'notice.description':
        'This toolkit is intended exclusively for authorised environments. Never use it without consent; responsibility lies fully with the user.',
    },
    pt: {
      'meta.title': 'NSA | Assistente de Segurança de Rede',
      'meta.description':
        'NSA (Network Security Assistant) ajuda a avaliar redes Wi-Fi com varreduras, análises e relatórios.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Navegação do projeto',
      'nav.overview': 'Visão geral',
      'nav.stack': 'Stack',
      'nav.installation': 'Instalação',
      'nav.contributions': 'Contribuições',
      'hero.badge': 'Segurança de rede',
      'hero.title': 'NSA | Assistente de Segurança de Rede',
      'hero.description':
        'Toolkit modular que testa, analisa e fortalece redes Wi-Fi com fluxos claros para varredura, avaliação e geração de relatórios.',
      'hero.cta.github': 'Ver no GitHub',
      'hero.cta.usage': 'Checklist de uso',
      'hero.highlights.scope.title': 'Escopo',
      'hero.highlights.scope.body':
        'Auditorias educativas em redes próprias, com foco na detecção de vulnerabilidades comuns.',
      'hero.highlights.access.title': 'Acesso',
      'hero.highlights.access.body':
        'Scripts Python executados localmente, com privilégios administrativos quando necessário.',
      'hero.card.label': 'Destaques rápidos',
      'hero.card.modules.title': 'Módulos principais',
      'hero.card.modules.body':
        'Scanner Wi-Fi, análise de segurança, relatórios em PDF e gerenciamento de perfis configurável.',
      'hero.card.platform.title': 'Plataforma alvo',
      'hero.card.platform.prefix': 'Ambientes Linux; alguns recursos exigem',
      'hero.card.platform.suffix': 'acesso e bibliotecas de rede específicas.',
      'hero.card.license.title': 'Licença',
      'hero.card.license.body':
        'MIT · Respeite o aviso legal: use apenas em redes com autorização explícita.',
      'overview.eyebrow': 'Visão geral',
      'overview.title': 'Auditoria prática para redes Wi-Fi residenciais e corporativas',
      'overview.description':
        'O NSA foi criado para profissionalizar testes de segurança domésticos, oferecendo scripts claros e documentados que qualquer entusiasta de cibersegurança pode estender.',
      'overview.list.1':
        'Mapeia redes disponíveis com metadados relevantes (BSSID, RSSI, canal, segurança declarada).',
      'overview.list.2': 'Avalia configurações de criptografia, intensidade de sinal e riscos comuns.',
      'overview.list.3': 'Gera relatórios legíveis com checklists de recomendações e próximos passos.',
      'overview.list.4': 'Permite salvar perfis Wi-Fi para repetir testes em ciclos regulares.',
      'stack.eyebrow': 'Stack técnica',
      'stack.title': 'Python como base para automação de segurança',
      'stack.description':
        'Bibliotecas de rede e geração de relatórios formam o núcleo do toolkit, mantendo a configuração enxuta e portátil.',
      'stack.cards.scan.title': 'Varredura e captura',
      'stack.cards.scan.prefix': 'Usa',
      'stack.cards.scan.suffix': 'para coletar informações da interface.',
      'stack.cards.scan.meta1': 'Modo monitor',
      'stack.cards.scan.meta2': 'iwlist',
      'stack.cards.analysis.title': 'Análise',
      'stack.cards.analysis.body':
        'Regras personalizáveis para verificar tipos de criptografia, senhas padrão e boas práticas de proteção.',
      'stack.cards.analysis.meta1': 'Ruleset em Python',
      'stack.cards.analysis.meta2': 'config YAML (futuro)',
      'stack.cards.reports.title': 'Relatórios',
      'stack.cards.reports.prefix': 'Gera relatórios amigáveis com',
      'stack.cards.reports.middle': 'ou',
      'stack.cards.reports.suffix': 'dependendo do fluxo.',
      'stack.cards.reports.meta1': 'Exportar PDF/HTML',
      'stack.cards.reports.meta2': 'Templates personalizados',
      'architecture.eyebrow': 'Arquitetura',
      'architecture.title': 'Scripts modulares para cada etapa do processo',
      'architecture.description':
        'Separação clara entre coleta, análise, relatórios e gerenciamento de perfis evita acoplamento e permite testes isolados.',
      'installation.eyebrow': 'Instalação',
      'installation.title': 'Preparando o ambiente de auditoria',
      'installation.description':
        'Execute os scripts em máquinas que suportem modo monitor e tenham privilégios necessários. Testes foram validados em distribuições Linux baseadas em Debian.',
      'installation.step1': 'Clone o repositório e crie um ambiente virtual:',
      'installation.step2': 'Instale as dependências sugeridas:',
      'installation.step3': 'Execute os módulos conforme necessário:',
      'installation.note':
        'Ajuste comandos para seu ambiente e garanta permissões de escrita nos diretórios de saída ao gerar relatórios.',
      'contributions.eyebrow': 'Código aberto',
      'contributions.title': 'Boas práticas para colaboração',
      'contributions.description':
        'Contribuidores podem expandir regras de segurança, formatos de relatório e suporte para novas plataformas.',
      'contributions.cards.heuristics.title': 'Novas heurísticas',
      'contributions.cards.heuristics.body':
        'Adicione verificações avançadas para detectar configurações inseguras frequentes.',
      'contributions.cards.heuristics.meta1': 'WPA3',
      'contributions.cards.heuristics.meta2': 'IoT',
      'contributions.cards.reports.title': 'Templates de relatório',
      'contributions.cards.reports.body':
        'Crie layouts personalizáveis com gráficos, checklists e orientações específicas por público.',
      'contributions.cards.reports.meta1': 'Markdown',
      'contributions.cards.reports.meta2': 'PDF',
      'contributions.cards.tests.title': 'Testes automatizados',
      'contributions.cards.tests.body':
        'Implemente testes unitários e mocks para simular resultados sem acesso ao hardware real.',
      'contributions.cards.tests.meta1': 'pytest',
      'contributions.cards.tests.meta2': 'tox',
      'contributions.note.prefix':
        'Antes de contribuir, leia o aviso legal no README e mantenha a identidade visual alinhada às guias em',
      'contributions.note.suffix': '.',
      'notice.eyebrow': 'Aviso',
      'notice.title': 'Uso responsável',
      'notice.description':
        'Este toolkit é destinado exclusivamente a ambientes autorizados. Nunca use sem consentimento; a responsabilidade é totalmente do usuário.',
    },
  },
  readmonitor: {
    en: {
      'meta.title': 'ReadMonitor | Smart library',
      'meta.description':
        'ReadMonitor is a full-stack ecosystem to manage reading lists and personal libraries with clear MVC separation.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Project navigation',
      'nav.overview': 'Overview',
      'nav.stack': 'Stack',
      'nav.installation': 'Installation',
      'nav.contributions': 'Contributions',
      'hero.badge': 'Reading tracker',
      'hero.description':
        'A platform to track completed, in-progress, and planned reading, with detailed control over a personal library.',
      'hero.cta.github': 'View on GitHub',
      'hero.cta.setup': 'Full setup',
      'hero.highlights.approach.title': 'Approach',
      'hero.highlights.approach.body':
        'MVC architecture distributed across Controller (Next.js), Model (Node + Sequelize), and View (Expo).',
      'hero.highlights.goal.title': 'Goal',
      'hero.highlights.goal.body':
        'Deliver a 360° view of reading progress with rich cataloguing and future reports.',
      'hero.card.label': 'Quick highlights',
      'hero.card.features.title': 'Core features',
      'hero.card.features.body':
        'Status management, full book metadata, and SQLite-backed synchronisation.',
      'hero.card.experience.title': 'Experience',
      'hero.card.experience.body': 'Web for administration, mobile for daily use via Expo.',
      'hero.card.license.title': 'License',
      'hero.card.license.body': 'MIT · Collaborative contributions are encouraged.',
      'overview.eyebrow': 'Overview',
      'overview.title': 'A digital library aligned with reading routines',
      'overview.description':
        'ReadMonitor centralises book tracking with a focus on quick lookups and detailed cataloguing.',
      'overview.list.1': 'Dashboard with filtered lists by status: read, in progress, and want to read.',
      'overview.list.2':
        'Full form with bibliographic details (ISBN, CDD, CDU, type, and availability).',
      'overview.list.3': 'Planned statistics and personalised recommendations.',
      'overview.list.4': 'Architecture ready for integration with external services or dashboards.',
      'stack.eyebrow': 'Technical stack',
      'stack.title': 'Layered separation to scale with confidence',
      'stack.description':
        'Each component owns specific responsibilities, enabling independent testing and incremental evolution.',
      'stack.cards.controller.title': 'Controller · Next.js',
      'stack.cards.controller.body': 'Layer responsible for routes, REST APIs, and the admin dashboard.',
      'stack.cards.controller.meta1': 'express',
      'stack.cards.controller.meta2': 'cors',
      'stack.cards.controller.meta3': 'dotenv',
      'stack.cards.model.title': 'Model · Node + Sequelize',
      'stack.cards.model.body': 'Orchestrates persistence in SQLite and the business rules layer.',
      'stack.cards.model.meta1': 'sqlite3',
      'stack.cards.model.meta2': 'ORM',
      'stack.cards.model.meta3': 'Seeder',
      'stack.cards.view.title': 'View · Expo',
      'stack.cards.view.body': 'Mobile interface to add, browse, and update books quickly.',
      'stack.cards.view.meta1': 'React Native',
      'stack.cards.view.meta2': 'Android',
      'architecture.eyebrow': 'Architecture',
      'architecture.title': 'Directory organisation',
      'architecture.description':
        'The structure reinforces layer separation and simplifies independent deployments.',
      'installation.eyebrow': 'Installation',
      'installation.title': 'Layer-by-layer setup flow',
      'installation.description':
        'Prepare each module in its corresponding directory, ensuring environment variables and dependencies are correct.',
      'installation.step1': 'Clone the repository:',
      'installation.step2': 'Configure the Controller (Next.js):',
      'installation.step3': 'Configure the Model (Node + Sequelize):',
      'installation.step4': 'Configure the View (Expo):',
      'installation.note':
        'Align each layer configuration to the same database/endpoint. Consider seed scripts to populate initial data.',
      'contributions.eyebrow': 'Open Source',
      'contributions.title': 'Ideas to evolve ReadMonitor',
      'contributions.description':
        'There is room for new features, integrations, and UX improvements across the web panel and the mobile app.',
      'contributions.cards.stats.title': 'Statistics',
      'contributions.cards.stats.body':
        'Dashboards with reading time, favourite genres, and milestone tracking.',
      'contributions.cards.stats.meta1': 'Charts',
      'contributions.cards.stats.meta2': 'Analytics',
      'contributions.cards.sync.title': 'Sync and backups',
      'contributions.cards.sync.body': 'Integrations with cloud services and automated library exports.',
      'contributions.cards.sync.meta1': 'Supabase',
      'contributions.cards.sync.meta2': 'Drive',
      'contributions.cards.mobile.title': 'Mobile UX',
      'contributions.cards.mobile.body':
        'Optimised flows for adding books with barcode scan or cover capture.',
      'contributions.cards.mobile.meta1': 'Camera',
      'contributions.cards.mobile.meta2': 'Vision',
      'contributions.note.prefix': 'Review',
      'contributions.note.middle':
        'to align priorities and keep visual consistency with the guide in',
      'contributions.note.suffix': '.',
    },
    pt: {
      'meta.title': 'ReadMonitor | Biblioteca inteligente',
      'meta.description':
        'ReadMonitor é um ecossistema full-stack para gerenciar listas de leitura e bibliotecas pessoais com separação MVC clara.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Navegação do projeto',
      'nav.overview': 'Visão geral',
      'nav.stack': 'Stack',
      'nav.installation': 'Instalação',
      'nav.contributions': 'Contribuições',
      'hero.badge': 'Monitor de leitura',
      'hero.description':
        'Uma plataforma para acompanhar leituras concluídas, em andamento e planejadas, com controle detalhado de uma biblioteca pessoal.',
      'hero.cta.github': 'Ver no GitHub',
      'hero.cta.setup': 'Configuração completa',
      'hero.highlights.approach.title': 'Abordagem',
      'hero.highlights.approach.body':
        'Arquitetura MVC distribuída entre Controller (Next.js), Model (Node + Sequelize) e View (Expo).',
      'hero.highlights.goal.title': 'Objetivo',
      'hero.highlights.goal.body':
        'Entregar uma visão 360° do progresso de leitura com catalogação rica e relatórios futuros.',
      'hero.card.label': 'Destaques rápidos',
      'hero.card.features.title': 'Funcionalidades principais',
      'hero.card.features.body':
        'Gerenciamento de status, metadados completos de livros e sincronização com SQLite.',
      'hero.card.experience.title': 'Experiência',
      'hero.card.experience.body': 'Web para administração, mobile para uso diário via Expo.',
      'hero.card.license.title': 'Licença',
      'hero.card.license.body': 'MIT · Contribuições colaborativas são incentivadas.',
      'overview.eyebrow': 'Visão geral',
      'overview.title': 'Uma biblioteca digital alinhada à rotina de leitura',
      'overview.description':
        'ReadMonitor centraliza o acompanhamento de livros com foco em consultas rápidas e catalogação detalhada.',
      'overview.list.1':
        'Dashboard com listas filtradas por status: lido, em andamento e quero ler.',
      'overview.list.2':
        'Formulário completo com dados bibliográficos (ISBN, CDD, CDU, tipo e disponibilidade).',
      'overview.list.3': 'Estatísticas planejadas e recomendações personalizadas.',
      'overview.list.4': 'Arquitetura pronta para integração com serviços externos ou dashboards.',
      'stack.eyebrow': 'Stack técnica',
      'stack.title': 'Separação em camadas para escalar com confiança',
      'stack.description':
        'Cada componente possui responsabilidades específicas, permitindo testes independentes e evolução incremental.',
      'stack.cards.controller.title': 'Controller · Next.js',
      'stack.cards.controller.body':
        'Camada responsável por rotas, APIs REST e painel administrativo.',
      'stack.cards.controller.meta1': 'express',
      'stack.cards.controller.meta2': 'cors',
      'stack.cards.controller.meta3': 'dotenv',
      'stack.cards.model.title': 'Model · Node + Sequelize',
      'stack.cards.model.body': 'Orquestra persistência em SQLite e a camada de regras de negócio.',
      'stack.cards.model.meta1': 'sqlite3',
      'stack.cards.model.meta2': 'ORM',
      'stack.cards.model.meta3': 'Seeder',
      'stack.cards.view.title': 'View · Expo',
      'stack.cards.view.body': 'Interface mobile para adicionar, buscar e atualizar livros rapidamente.',
      'stack.cards.view.meta1': 'React Native',
      'stack.cards.view.meta2': 'Android',
      'architecture.eyebrow': 'Arquitetura',
      'architecture.title': 'Organização de diretórios',
      'architecture.description':
        'A estrutura reforça a separação de camadas e simplifica implantações independentes.',
      'installation.eyebrow': 'Instalação',
      'installation.title': 'Fluxo de setup por camadas',
      'installation.description':
        'Prepare cada módulo no diretório correspondente, garantindo variáveis de ambiente e dependências corretas.',
      'installation.step1': 'Clone o repositório:',
      'installation.step2': 'Configure o Controller (Next.js):',
      'installation.step3': 'Configure o Model (Node + Sequelize):',
      'installation.step4': 'Configure o View (Expo):',
      'installation.note':
        'Alinhe a configuração de cada camada ao mesmo banco/endpoint. Considere scripts de seed para popular dados iniciais.',
      'contributions.eyebrow': 'Código aberto',
      'contributions.title': 'Ideias para evoluir o ReadMonitor',
      'contributions.description':
        'Há espaço para novas funcionalidades, integrações e melhorias de UX no painel web e no app mobile.',
      'contributions.cards.stats.title': 'Estatísticas',
      'contributions.cards.stats.body':
        'Dashboards com tempo de leitura, gêneros favoritos e acompanhamento de marcos.',
      'contributions.cards.stats.meta1': 'Gráficos',
      'contributions.cards.stats.meta2': 'Analytics',
      'contributions.cards.sync.title': 'Sincronização e backups',
      'contributions.cards.sync.body':
        'Integrações com serviços em nuvem e exportações automatizadas da biblioteca.',
      'contributions.cards.sync.meta1': 'Supabase',
      'contributions.cards.sync.meta2': 'Drive',
      'contributions.cards.mobile.title': 'UX mobile',
      'contributions.cards.mobile.body':
        'Fluxos otimizados para adicionar livros com leitura de código de barras ou captura de capa.',
      'contributions.cards.mobile.meta1': 'Câmera',
      'contributions.cards.mobile.meta2': 'Visão',
      'contributions.note.prefix': 'Revise',
      'contributions.note.middle':
        'para alinhar prioridades e manter consistência visual com o guia em',
      'contributions.note.suffix': '.',
    },
  },
  russian_training: {
    en: {
      'meta.title': 'Russian Training Hub | Russian learning',
      'meta.description':
        'Russian Training Hub (RTH) is a mini-game hub for Russian literacy with modular content and offline support.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Project navigation',
      'nav.overview': 'Overview',
      'nav.modules': 'Modules',
      'nav.installation': 'Installation',
      'nav.contributions': 'Contributions',
      'hero.badge': 'Language learning',
      'hero.title': 'Russian Training Hub',
      'hero.description':
        'A lightweight, modular web experience to train the Cyrillic alphabet, vocabulary, and Russian grammar directly in the browser.',
      'hero.cta.github': 'View on GitHub',
      'hero.cta.try': 'Try it now',
      'hero.highlights.experience.title': 'Experience',
      'hero.highlights.experience.body':
        'SPA interface with no backend, ready to run offline with a service worker.',
      'hero.highlights.design.title': 'Design',
      'hero.highlights.design.prefix': 'Visuals aligned with the identity defined in',
      'hero.highlights.design.suffix': ', keeping accessibility intact.',
      'hero.card.label': 'Quick highlights',
      'hero.card.status.title': 'Module status',
      'hero.card.status.body':
        'Typing and Vocabulary complete; Conjugation and Declension in progress.',
      'hero.card.offline.title': 'Offline ready',
      'hero.card.offline.body':
        'The service worker preloads essential assets and keeps the game available without a connection.',
      'hero.card.license.title': 'License',
      'hero.card.license.body': 'MIT · Ideal for forks and re-theming into other languages.',
      'overview.eyebrow': 'Overview',
      'overview.title': 'Accessible gamification for Russian literacy',
      'overview.description':
        'RTH provides independent mini-games with immediate feedback, adjusting difficulty based on user progress.',
      'overview.list.1':
        'Responsive typography and keyboard navigation with ARIA elements and visible focus.',
      'overview.list.2':
        'Centralised dataset for characters, words, and verbs, easing translation and customisation.',
      'overview.list.3': 'Modular architecture with ES modules and no build step.',
      'overview.list.4.prefix': 'Detailed documentation in',
      'overview.list.4.suffix': 'to help contributors extend the project.',
      'modules.eyebrow': 'Modules',
      'modules.title': 'Games and experiences available',
      'modules.description.prefix': 'Each folder in',
      'modules.description.suffix': 'represents an independent module. Below is the current status.',
      'modules.cards.typing.title': 'Typing',
      'modules.cards.typing.body':
        'Typing drills for characters and words, with Latin↔Cyrillic switching and scoring.',
      'modules.cards.typing.meta1': 'char-map.js',
      'modules.cards.typing.meta2': 'Active',
      'modules.cards.vocabulary.title': 'Vocabulary',
      'modules.cards.vocabulary.body':
        'Typing + multiple-choice quiz mode, with configurable levels and shuffled distractors.',
      'modules.cards.vocabulary.meta1': 'char-map.js',
      'modules.cards.vocabulary.meta2': 'Operational',
      'modules.cards.conjugation.title': 'Conjugation',
      'modules.cards.conjugation.body':
        'Interface ready while waiting for verb datasets. Ideal for contributions with regular and irregular verbs.',
      'modules.cards.conjugation.meta1': 'verbs.js',
      'modules.cards.conjugation.meta2': 'In progress',
      'modules.cards.declension.title': 'Declension',
      'modules.cards.declension.body':
        'Structured placeholder for case exercises and contextual phrases.',
      'modules.cards.declension.meta1': 'cases.js',
      'modules.cards.declension.meta2': 'Planned',
      'architecture.eyebrow': 'Architecture',
      'architecture.title': 'Structure designed for quick extensions',
      'architecture.description':
        'Folders organised by responsibility ensure new modules can be added without side effects.',
      'installation.eyebrow': 'Installation',
      'installation.title': 'Host in minutes',
      'installation.description':
        'As a 100% frontend project, you only need to serve the static files on any host.',
      'installation.step1': 'Clone the repository or fork it:',
      'installation.step2': 'Deploy to a static server (e.g. GitHub Pages):',
      'installation.step3': 'For local development:',
      'installation.note':
        'The service worker activates automatically in production (HTTPS). Clear cache via DevTools when updating datasets.',
      'contributions.eyebrow': 'Open Source',
      'contributions.title': 'How to strengthen Russian Training Hub',
      'contributions.description':
        'The community can expand datasets, create new game modes, and improve accessibility.',
      'contributions.cards.datasets.title': 'Datasets',
      'contributions.cards.datasets.body':
        'Add verbs, phrases, and audio organised by difficulty level and theme.',
      'contributions.cards.datasets.meta1': 'JSON',
      'contributions.cards.datasets.meta2': 'Open licenses',
      'contributions.cards.feedback.title': 'Instant feedback',
      'contributions.cards.feedback.body':
        'Create animations and sounds that reinforce hits/misses without impacting performance.',
      'contributions.cards.feedback.meta1': 'Web Audio',
      'contributions.cards.feedback.meta2': 'CSS Animations',
      'contributions.cards.languages.title': 'New languages',
      'contributions.cards.languages.body':
        'Reuse the structure for Spanish, German, or Mandarin by swapping datasets.',
      'contributions.cards.languages.meta1': 'I18n',
      'contributions.cards.languages.meta2': 'Config JSON',
      'contributions.note.prefix': 'Review',
      'contributions.note.middle': 'and',
      'contributions.note.suffix':
        'to align content, visual identity, and accessibility guidelines.',
    },
    pt: {
      'meta.title': 'Russian Training Hub | Aprendizado de russo',
      'meta.description':
        'Russian Training Hub (RTH) é um hub de minijogos para alfabetização em russo com conteúdo modular e suporte offline.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Navegação do projeto',
      'nav.overview': 'Visão geral',
      'nav.modules': 'Módulos',
      'nav.installation': 'Instalação',
      'nav.contributions': 'Contribuições',
      'hero.badge': 'Aprendizado de idiomas',
      'hero.title': 'Russian Training Hub',
      'hero.description':
        'Uma experiência web leve e modular para treinar o alfabeto cirílico, vocabulário e gramática russa diretamente no navegador.',
      'hero.cta.github': 'Ver no GitHub',
      'hero.cta.try': 'Testar agora',
      'hero.highlights.experience.title': 'Experiência',
      'hero.highlights.experience.body':
        'Interface SPA sem backend, pronta para rodar offline com service worker.',
      'hero.highlights.design.title': 'Design',
      'hero.highlights.design.prefix': 'Visuais alinhados à identidade definida em',
      'hero.highlights.design.suffix': ', mantendo a acessibilidade intacta.',
      'hero.card.label': 'Destaques rápidos',
      'hero.card.status.title': 'Status dos módulos',
      'hero.card.status.body':
        'Digitação e Vocabulário completos; Conjugação e Declinação em andamento.',
      'hero.card.offline.title': 'Offline pronto',
      'hero.card.offline.body':
        'O service worker pré-carrega ativos essenciais e mantém o jogo disponível sem conexão.',
      'hero.card.license.title': 'Licença',
      'hero.card.license.body': 'MIT · Ideal para forks e retemas em outros idiomas.',
      'overview.eyebrow': 'Visão geral',
      'overview.title': 'Gamificação acessível para alfabetização em russo',
      'overview.description':
        'O RTH oferece minijogos independentes com feedback imediato, ajustando a dificuldade conforme o progresso do usuário.',
      'overview.list.1':
        'Tipografia responsiva e navegação por teclado com elementos ARIA e foco visível.',
      'overview.list.2':
        'Dataset centralizado para caracteres, palavras e verbos, facilitando tradução e customização.',
      'overview.list.3': 'Arquitetura modular com ES modules e sem etapa de build.',
      'overview.list.4.prefix': 'Documentação detalhada em',
      'overview.list.4.suffix': 'para ajudar contribuidores a estender o projeto.',
      'modules.eyebrow': 'Módulos',
      'modules.title': 'Jogos e experiências disponíveis',
      'modules.description.prefix': 'Cada pasta em',
      'modules.description.suffix': 'representa um módulo independente. Abaixo está o status atual.',
      'modules.cards.typing.title': 'Digitação',
      'modules.cards.typing.body':
        'Exercícios de digitação para caracteres e palavras, com alternância Latim↔Cirílico e pontuação.',
      'modules.cards.typing.meta1': 'char-map.js',
      'modules.cards.typing.meta2': 'Ativo',
      'modules.cards.vocabulary.title': 'Vocabulário',
      'modules.cards.vocabulary.body':
        'Modo de digitação + quiz de múltipla escolha, com níveis configuráveis e distratores embaralhados.',
      'modules.cards.vocabulary.meta1': 'char-map.js',
      'modules.cards.vocabulary.meta2': 'Operacional',
      'modules.cards.conjugation.title': 'Conjugação',
      'modules.cards.conjugation.body':
        'Interface pronta enquanto aguarda datasets de verbos. Ideal para contribuições com verbos regulares e irregulares.',
      'modules.cards.conjugation.meta1': 'verbs.js',
      'modules.cards.conjugation.meta2': 'Em andamento',
      'modules.cards.declension.title': 'Declinação',
      'modules.cards.declension.body': 'Placeholder estruturado para exercícios de casos e frases contextuais.',
      'modules.cards.declension.meta1': 'cases.js',
      'modules.cards.declension.meta2': 'Planejado',
      'architecture.eyebrow': 'Arquitetura',
      'architecture.title': 'Estrutura projetada para extensões rápidas',
      'architecture.description':
        'Pastas organizadas por responsabilidade garantem que novos módulos sejam adicionados sem efeitos colaterais.',
      'installation.eyebrow': 'Instalação',
      'installation.title': 'Hospede em minutos',
      'installation.description':
        'Como projeto 100% frontend, basta servir os arquivos estáticos em qualquer host.',
      'installation.step1': 'Clone o repositório ou faça um fork:',
      'installation.step2': 'Publique em um servidor estático (ex.: GitHub Pages):',
      'installation.step3': 'Para desenvolvimento local:',
      'installation.note':
        'O service worker ativa automaticamente em produção (HTTPS). Limpe o cache via DevTools ao atualizar datasets.',
      'contributions.eyebrow': 'Código aberto',
      'contributions.title': 'Como fortalecer o Russian Training Hub',
      'contributions.description':
        'A comunidade pode expandir datasets, criar novos modos de jogo e melhorar acessibilidade.',
      'contributions.cards.datasets.title': 'Datasets',
      'contributions.cards.datasets.body':
        'Adicione verbos, frases e áudio organizados por nível de dificuldade e tema.',
      'contributions.cards.datasets.meta1': 'JSON',
      'contributions.cards.datasets.meta2': 'Licenças abertas',
      'contributions.cards.feedback.title': 'Feedback instantâneo',
      'contributions.cards.feedback.body':
        'Crie animações e sons que reforcem acertos/erros sem impactar performance.',
      'contributions.cards.feedback.meta1': 'Web Audio',
      'contributions.cards.feedback.meta2': 'Animações CSS',
      'contributions.cards.languages.title': 'Novos idiomas',
      'contributions.cards.languages.body':
        'Reaproveite a estrutura para espanhol, alemão ou mandarim trocando datasets.',
      'contributions.cards.languages.meta1': 'I18n',
      'contributions.cards.languages.meta2': 'Config JSON',
      'contributions.note.prefix': 'Revise',
      'contributions.note.middle': 'e',
      'contributions.note.suffix':
        'para alinhar conteúdo, identidade visual e diretrizes de acessibilidade.',
    },
  },
  edu_assistant: baseTranslations.edu_assistant,
  ai_studies: baseTranslations.ai_studies,
  nsa: baseTranslations.nsa,
  readmonitor: baseTranslations.readmonitor,
  russian_training: baseTranslations.russian_training,
};

const translations = {
  home: {
    en: {
      'meta.title': 'Eduardo45MP.dev | Portfolio',
      'meta.description':
        'Portfolio of Eduardo Peixoto (Eduardo45MP.dev), developer focused on AI, automation, cybersecurity and web solutions.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Main navigation',
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.stack': 'Stack',
      'nav.contact': 'Contact',
      'hero.badge': 'CEO @Innoforge.tech · Developer',
      'hero.title': 'Entrepreneurship driven by technology',
      'hero.description':
        'I am Eduardo Peixoto, integrating technological innovation, automation and cybersecurity into digital projects that solve real-world challenges and deliver immediate impact.',
      'hero.cta.projects': 'View projects',
      'hero.cta.contact': 'Get in touch',
      'hero.mission.title': 'Mission',
      'hero.mission.body':
        'Transform ambitious ideas into scalable solutions by connecting strategy, product, and technology.',
      'hero.expertise.title': 'Expertise',
      'hero.expertise.body': 'AI, automation, cybersecurity and responsive web experiences.',
      'hero.card.label': 'Quick highlights',
      'hero.card.stack.title': 'Core Stack',
      'hero.card.stack.body': 'Functional and pretty UX with secure servers and criative solutions.',
      'hero.card.languages.title': 'Languages & Networking',
      'hero.card.languages.body':
        'Portuguese (native), English (fluent), and Spanish (conversational). Expanding into Mandarin, French, German, Russian, and Arabic.',
      'hero.card.focus.title': 'Current Focus',
      'hero.card.focus.body':
        'Testing intelligent automations and scalable digital experiences for new partnerships and products.',
      'about.eyebrow': 'About me',
      'about.title': 'From programming logic to collaborative entrepreneurship',
      'about.description':
        'My journey combines problem-solving through software, strategic business vision, and a passion for creating solutions that connect people and technology.',
      'about.list.1':
        'I adapt languages, frameworks, and databases to the needs of each project, always focused on delivering value.',
      'about.list.2':
        'I see each initiative as a living lab: improving technical skills and the ability to solve complex problems.',
      'about.list.3':
        'I seek partners with complementary strengths to turn ambitious ideas into real digital products.',
      'about.list.4':
        'I balance technology with personal interests such as languages, spirituality, the arts, and the vastness of the sea.',
      'stack.eyebrow': 'Skills & stack',
      'stack.title': 'Building complete experiences with clean technology',
      'stack.description':
        'Minimalist and scalable stack, ready to evolve from static pages to full applications with automation, security, and data.',
      'stack.cards.ai.title': 'AI & Automation',
      'stack.cards.ai.body':
        'Continuous experiments with personal assistants, automated flows, and solutions that boost productivity.',
      'stack.cards.ai.meta1': 'edu_assistant',
      'stack.cards.ai.meta2': 'Automated Ops',
      'stack.cards.security.title': 'Cybersecurity',
      'stack.cards.security.body':
        'Research and testing in Wi-Fi networks, prioritising protection and reliability from the ground up.',
      'stack.cards.security.meta1': 'NSA toolkit',
      'stack.cards.security.meta2': 'Network Hardening',
      'stack.cards.web.title': 'Web Experiences',
      'stack.cards.web.body':
        'Responsive interfaces, intuitive navigation, and a consistent visual identity with Poppins + Roboto.',
      'stack.cards.web.meta1': 'Flexbox & Grid',
      'stack.cards.web.meta2': 'Design Systems',
      'stack.cards.languages.title': 'Languages & Culture',
      'stack.cards.languages.body':
        'Fluent communication in different languages to expand opportunities and global collaborations.',
      'stack.cards.languages.meta1': 'PT · EN · ES',
      'stack.cards.languages.meta2': 'Global Mindset',
      'projects.eyebrow': 'Featured projects',
      'projects.title': 'Applied innovation across different domains',
      'projects.description':
        'A selection of public initiatives showcasing the combination of AI, automation, education, and security built throughout my journey.',
      'projects.cards.edu_assistant.body':
        'Voice assistant with local memory and smart flows to organise routines and research insights.',
      'projects.cards.ai_studies.body':
        'Laboratory repository to study, test and document experiments in artificial intelligence.',
      'projects.cards.readmonitor.body':
        'Mobile/web app that tracks reading habits with a focus on continuous improvement.',
      'projects.cards.russian.body':
        'Gamified educational games platform to make learning Russian more accessible.',
      'projects.cards.nsa.body':
        'System for Wi-Fi testing and audits, strengthening security layers.',
      'projects.cards.more.body':
        'Explore other open solutions, automations, and proof of concepts directly on my public GitHub.',
      'projects.cards.see_more': 'See more',
      'projects.cards.view_app': 'View App',
      'projects.cards.view_github': 'View on GitHub',
      'projects.cards.more.link': 'View all repositories',
      'roadmap.eyebrow': 'Roadmap & vision',
      'roadmap.title': 'Continuous evolution of the portfolio',
      'roadmap.description':
        'The roadmap guides frequent updates to keep the portfolio aligned with strategic initiatives and partnerships.',
      'roadmap.short.title': 'Short term',
      'roadmap.short.body':
        'Full responsive layout, visual project cards, favicon and consistent visual identity.',
      'roadmap.medium.title': 'Medium term',
      'roadmap.medium.body':
        'Integrated blog, dynamic stats, dark mode, and deployment comparison between GitHub Pages, Vercel and Netlify.',
      'roadmap.long.title': 'Long term',
      'roadmap.long.body':
        'Transform the portfolio into a SPA with React/Next.js, real contact form, and full multilingual support.',
      'contact.badge': "Let's create together",
      'contact.title': 'Open to collaborations and new partnerships',
      'contact.description':
        'Count on me to build digital solutions that connect technology, business, and real impact. Send a message, share an idea, or schedule a chat.',
      'contact.phone': '+55 81 99935-0771 (whatsapp only)',
      'footer.brand': 'Eduardo Peixoto · eduardo45MP.dev',
      'footer.docs.intro': 'Full documentation available in',
      'footer.docs.architecture': 'Architecture',
      'footer.docs.visual': 'Visual Identity',
      'footer.docs.and': 'and',
      'footer.docs.roadmap': 'Roadmap',
    },
    pt: {
      'meta.title': 'Eduardo45MP.dev | Portfólio',
      'meta.description':
        'Portfólio de Eduardo Peixoto (Eduardo45MP.dev), desenvolvedor focado em IA, automação, cibersegurança e soluções web.',
      brand: 'Eduardo45MP.dev',
      'nav.label': 'Navegação principal',
      'nav.home': 'Início',
      'nav.projects': 'Projetos',
      'nav.about': 'Sobre',
      'nav.stack': 'Stack',
      'nav.contact': 'Contato',
      'hero.badge': 'CEO @Innoforge.tech · Desenvolvedor',
      'hero.title': 'Empreendedorismo movido por tecnologia',
      'hero.description':
        'Sou Eduardo Peixoto, integrando inovação tecnológica, automação e cibersegurança em projetos digitais que resolvem desafios reais e entregam impacto imediato.',
      'hero.cta.projects': 'Ver projetos',
      'hero.cta.contact': 'Fale comigo',
      'hero.mission.title': 'Missão',
      'hero.mission.body':
        'Transformar ideias ambiciosas em soluções escaláveis conectando estratégia, produto e tecnologia.',
      'hero.expertise.title': 'Especialidade',
      'hero.expertise.body': 'IA, automação, cibersegurança e experiências web responsivas.',
      'hero.card.label': 'Destaques rápidos',
      'hero.card.stack.title': 'Stack principal',
      'hero.card.stack.body': 'UX funcional e elegante com servidores seguros e soluções criativas.',
      'hero.card.languages.title': 'Idiomas & Networking',
      'hero.card.languages.body':
        'Português (nativo), inglês (fluente) e espanhol (conversacional). Expandindo para mandarim, francês, alemão, russo e árabe.',
      'hero.card.focus.title': 'Foco atual',
      'hero.card.focus.body':
        'Testando automações inteligentes e experiências digitais escaláveis para novas parcerias e produtos.',
      'about.eyebrow': 'Sobre mim',
      'about.title': 'Da lógica da programação ao empreendedorismo colaborativo',
      'about.description':
        'Minha trajetória combina resolução de problemas via software, visão estratégica de negócios e paixão por criar soluções que conectam pessoas e tecnologia.',
      'about.list.1':
        'Adapto linguagens, frameworks e bancos de dados às necessidades de cada projeto, sempre focado em entregar valor.',
      'about.list.2':
        'Vejo cada iniciativa como um laboratório vivo: aprimorando habilidades técnicas e a capacidade de resolver problemas complexos.',
      'about.list.3':
        'Busco parceiros com forças complementares para transformar ideias ambiciosas em produtos digitais reais.',
      'about.list.4':
        'Equilibro tecnologia com interesses pessoais como idiomas, espiritualidade, artes e a imensidão do mar.',
      'stack.eyebrow': 'Habilidades & stack',
      'stack.title': 'Construindo experiências completas com tecnologia limpa',
      'stack.description':
        'Stack minimalista e escalável, pronta para evoluir de páginas estáticas para aplicações completas com automação, segurança e dados.',
      'stack.cards.ai.title': 'IA & Automação',
      'stack.cards.ai.body':
        'Experimentos contínuos com assistentes pessoais, fluxos automatizados e soluções que aumentam a produtividade.',
      'stack.cards.ai.meta1': 'edu_assistant',
      'stack.cards.ai.meta2': 'Operações automatizadas',
      'stack.cards.security.title': 'Cibersegurança',
      'stack.cards.security.body':
        'Pesquisa e testes em redes Wi-Fi, priorizando proteção e confiabilidade desde a base.',
      'stack.cards.security.meta1': 'Toolkit NSA',
      'stack.cards.security.meta2': 'Hardening de rede',
      'stack.cards.web.title': 'Experiências web',
      'stack.cards.web.body':
        'Interfaces responsivas, navegação intuitiva e identidade visual consistente com Poppins + Roboto.',
      'stack.cards.web.meta1': 'Flexbox & Grid',
      'stack.cards.web.meta2': 'Design systems',
      'stack.cards.languages.title': 'Idiomas & Cultura',
      'stack.cards.languages.body':
        'Comunicação fluente em diferentes idiomas para ampliar oportunidades e colaborações globais.',
      'stack.cards.languages.meta1': 'PT · EN · ES',
      'stack.cards.languages.meta2': 'Mentalidade global',
      'projects.eyebrow': 'Projetos em destaque',
      'projects.title': 'Inovação aplicada em diferentes domínios',
      'projects.description':
        'Uma seleção de iniciativas públicas que combinam IA, automação, educação e segurança ao longo da minha jornada.',
      'projects.cards.edu_assistant.body':
        'Assistente de voz com memória local e fluxos inteligentes para organizar rotinas e insights de pesquisa.',
      'projects.cards.ai_studies.body':
        'Repositório laboratório para estudar, testar e documentar experimentos em inteligência artificial.',
      'projects.cards.readmonitor.body':
        'Aplicativo mobile/web que acompanha hábitos de leitura com foco em melhoria contínua.',
      'projects.cards.russian.body':
        'Plataforma gamificada de jogos educativos para tornar o aprendizado de russo mais acessível.',
      'projects.cards.nsa.body':
        'Sistema para testes e auditorias em Wi-Fi, fortalecendo camadas de segurança.',
      'projects.cards.more.body':
        'Explore outras soluções abertas, automações e provas de conceito diretamente no meu GitHub.',
      'projects.cards.see_more': 'Ver mais',
      'projects.cards.view_app': 'Ver app',
      'projects.cards.view_github': 'Ver no GitHub',
      'projects.cards.more.link': 'Ver todos os repositórios',
      'roadmap.eyebrow': 'Roadmap & visão',
      'roadmap.title': 'Evolução contínua do portfólio',
      'roadmap.description':
        'O roadmap orienta atualizações frequentes para manter o portfólio alinhado a iniciativas estratégicas e parcerias.',
      'roadmap.short.title': 'Curto prazo',
      'roadmap.short.body':
        'Layout totalmente responsivo, cards visuais de projetos, favicon e identidade visual consistente.',
      'roadmap.medium.title': 'Médio prazo',
      'roadmap.medium.body':
        'Blog integrado, estatísticas dinâmicas, modo escuro e comparação de deploy entre GitHub Pages, Vercel e Netlify.',
      'roadmap.long.title': 'Longo prazo',
      'roadmap.long.body':
        'Transformar o portfólio em uma SPA com React/Next.js, formulário de contato real e suporte multilíngue completo.',
      'contact.badge': 'Vamos criar juntos',
      'contact.title': 'Aberto a colaborações e novas parcerias',
      'contact.description':
        'Conte comigo para construir soluções digitais que conectam tecnologia, negócios e impacto real. Envie uma mensagem, compartilhe uma ideia ou agende uma conversa.',
      'contact.phone': '+55 81 99935-0771 (somente WhatsApp)',
      'footer.brand': 'Eduardo Peixoto · eduardo45MP.dev',
      'footer.docs.intro': 'Documentação completa disponível em',
      'footer.docs.architecture': 'Arquitetura',
      'footer.docs.visual': 'Identidade visual',
      'footer.docs.and': 'e',
      'footer.docs.roadmap': 'Roadmap',
    },
  },
};

const languageStorageKey = 'language';
const storedLanguage = localStorage.getItem(languageStorageKey);
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
let currentLanguage = storedLanguage || browserLanguage;

const getTranslationSet = (language) => {
  const pageKey = document.body?.dataset.page || 'home';
  const pageTranslations = translations[pageKey];
  return {
    ...(baseTranslations[language] || {}),
    ...(pageTranslations?.[language] || {}),
  };
};

const updateThemeLabel = (language) => {
  const dictionary = getTranslationSet(language);
  if (!themeLabel) {
    return;
  }
  const currentTheme = document.documentElement.getAttribute('data-theme');
  themeLabel.textContent =
    currentTheme === 'dark' ? dictionary['theme.light'] : dictionary['theme.dark'];
};

const updateLanguageToggle = (language) => {
  if (!languageToggle) {
    return;
  }
  languageOptions.forEach((option) => {
    option.classList.toggle('is-active', option.dataset.langOption === language);
  });
  const nextLanguage = language === 'en' ? 'pt' : 'en';
  const dictionary = getTranslationSet(language);
  const labelKey = nextLanguage === 'pt' ? 'lang.toggle.pt' : 'lang.toggle.en';
  languageToggle.setAttribute('aria-label', dictionary[labelKey]);
};

const applyLanguage = (language) => {
  currentLanguage = language;
  localStorage.setItem(languageStorageKey, language);
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-GB';

  const dictionary = getTranslationSet(language);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const attribute = element.dataset.i18nAttr;
    const key = element.dataset.i18nKey;
    if (dictionary[key]) {
      element.setAttribute(attribute, dictionary[key]);
    }
  });

  updateThemeLabel(language);
  updateLanguageToggle(language);
};

applyLanguage(currentLanguage);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    themeToggle.setAttribute('aria-pressed', nextTheme === 'dark');
    updateThemeLabel(currentLanguage);
  });
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const nextLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    applyLanguage(nextLanguage);
  });
}
