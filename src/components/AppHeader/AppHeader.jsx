import React, { memo } from 'react';
import classnames from 'classnames';

// store
import { themeSliceSelectors } from '@store/rootSelector';

// hooks
import useChangeTheme from '@hooks/theme/useChangeTheme';
import useSelectorStore from '@hooks/useSelector';

// styles
import styles from './AppHeader.scss';

// utils
import UNIQUE_TEXT_KEYS from '@constants/unique-keys';
import CONST_TEXT from '@constants/text';

const AppHeader = () => {
  const theme = useSelectorStore(themeSliceSelectors);
  const changeTheme = useChangeTheme();

  const handleChangeTheme = (e) => {
    changeTheme(e?.target?.checked ? UNIQUE_TEXT_KEYS.dark : UNIQUE_TEXT_KEYS.light);
  };

  return (
    <header className={classnames(styles.headerPos, styles.header)}>
      <h1>{CONST_TEXT.todo}</h1>

      <input
        checked={theme === UNIQUE_TEXT_KEYS.dark}
        className={styles.themeCheckbox}
        type='checkbox'
        onChange={handleChangeTheme}
        id='theme-checkbox'
      />
      <label className={styles.themeToggler} htmlFor='theme-checkbox' />
    </header>
  );
};

export default memo(AppHeader);
