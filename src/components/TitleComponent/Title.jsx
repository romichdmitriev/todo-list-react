import React from "react";

import styles from './Title.scss';

const Title = ({ setLightTheme, isLightTheme }) => {
  const changeTheme = () => {
    !isLightTheme ? setLightTheme(true) : setLightTheme(false);
  }

  return (
    <div className={`${styles.titlePos} ${styles.title}`}>
      <h1>TODO</h1>

      <input id="theme-checkbox" className={styles.themeCheckbox} type="checkbox"/>
      <label className={styles.themeToggler} htmlFor="theme-checkbox" onClick={changeTheme}></label>
    </div>
  )
}

export default Title;
