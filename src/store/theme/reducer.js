import THEME_ACTION_TYPES from './types';

export const themeInitialState = {
  theme: 'light',
};

export const themeReducer = {
  [THEME_ACTION_TYPES['theme/theme-changed']]: (state, action) => {
    return {
      theme: action.payload,
    };
  },
};
