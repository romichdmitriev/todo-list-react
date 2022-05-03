import useDispatchActions from '@hooks/useDispatchActions';
import { useCallback } from 'react';

// store
import { themeSliceActions } from '@store/rootActions';
import LocalStorage from '@service/LocalStorage';

// utils
import UNIQUE_TEXT_KEYS from '@constants/unique-keys';

const useChangeTheme = () => {
  const { changeTheme } = useDispatchActions(themeSliceActions);

  return useCallback((theme) => {
    changeTheme(theme);

    LocalStorage.set(UNIQUE_TEXT_KEYS.theme, theme);
    document?.firstElementChild?.setAttribute(UNIQUE_TEXT_KEYS.dataThemeAttr, theme);
  }, []);
};

export default useChangeTheme;
