const supportedLanguages = ['en-GB', 'pt-BR'];
const fallbackLanguage = 'en-GB';
const translationsCache = {};

const getBasePath = () =>
  document.documentElement.getAttribute('data-i18n-base') || './i18n';

const normaliseLanguage = (language) => {
  if (!language) {
    return fallbackLanguage;
  }

  const value = language.toLowerCase();
  if (value.startsWith('pt')) {
    return 'pt-BR';
  }

  if (value.startsWith('en')) {
    return 'en-GB';
  }

  return fallbackLanguage;
};

const getTranslationValue = (translations, key) =>
  key.split('.').reduce((acc, part) => (acc ? acc[part] : null), translations);

const loadTranslations = async (language) => {
  if (translationsCache[language]) {
    return translationsCache[language];
  }

  try {
    const response = await fetch(`${getBasePath()}/${language}.json`);
    if (!response.ok) {
      throw new Error(`Unable to load translations for ${language}.`);
    }

    const data = await response.json();
    translationsCache[language] = data;
    return data;
  } catch (error) {
    const inMemoryData = window.I18N_DATA?.[language];
    if (inMemoryData) {
      // Fallback for file:// usage where fetch is blocked by CORS on local files.
      console.warn(
        'i18n: Falling back to embedded translations because fetch failed. ' +
          'Use a local server (e.g. `python -m http.server`) for best results.',
        error
      );
      translationsCache[language] = inMemoryData;
      return inMemoryData;
    }
    throw error;
  }
};

const applyTranslations = (translations) => {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = getTranslationValue(translations, key);

    if (value === null || value === undefined) {
      return;
    }

    const attribute = element.getAttribute('data-i18n-attr');
    const useHtml = element.getAttribute('data-i18n-html') === 'true';

    if (attribute) {
      element.setAttribute(attribute, value);
    } else if (useHtml) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });
};

const updateLanguageControls = (language) => {
  const buttons = document.querySelectorAll('[data-lang]');

  buttons.forEach((button) => {
    const isActive = button.getAttribute('data-lang') === language;
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    button.toggleAttribute('data-active', isActive);
  });
};

const setLanguage = async (language) => {
  const normalisedLanguage = normaliseLanguage(language);
  const previousFocus = document.activeElement;

  let translations;
  let resolvedLanguage = normalisedLanguage;
  try {
    translations = await loadTranslations(normalisedLanguage);
  } catch (error) {
    if (normalisedLanguage !== fallbackLanguage) {
      translations = await loadTranslations(fallbackLanguage);
      resolvedLanguage = fallbackLanguage;
    } else {
      throw error;
    }
  }

  const finalLanguage = supportedLanguages.includes(resolvedLanguage)
    ? resolvedLanguage
    : fallbackLanguage;

  window.i18n = {
    language: finalLanguage,
    translations,
    t: (key) => getTranslationValue(translations, key) || key,
  };

  document.documentElement.lang = finalLanguage;
  applyTranslations(translations);
  updateLanguageControls(finalLanguage);
  localStorage.setItem('language', finalLanguage);

  document.dispatchEvent(
    new CustomEvent('languageChanged', { detail: { language: finalLanguage } })
  );

  if (previousFocus && document.contains(previousFocus)) {
    previousFocus.focus({ preventScroll: true });
  }

  return finalLanguage;
};

const getInitialLanguage = () =>
  localStorage.getItem('language') || navigator.language || fallbackLanguage;

const initLanguageSwitcher = () => {
  const buttons = document.querySelectorAll('[data-lang]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.getAttribute('data-lang'));
    });
  });
};

const initI18n = () => {
  initLanguageSwitcher();
  setLanguage(getInitialLanguage()).catch((error) => {
    console.error('i18n: Failed to initialize translations.', error);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}

window.setLanguage = setLanguage;
