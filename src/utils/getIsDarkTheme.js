import LocalStorage from '../service/LocalStorage';
import UNIQUE_TEXT_KEYS from '../constants/unique-keys';

const getMatchMediaPreferColors = () => {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const getUserTheme = () => {
  let currentTheme = LocalStorage.get(UNIQUE_TEXT_KEYS.theme);

  if (!currentTheme) {
    currentTheme = getMatchMediaPreferColors() ? UNIQUE_TEXT_KEYS.dark : UNIQUE_TEXT_KEYS.light;
  }

  return currentTheme;
};

export default getUserTheme;
