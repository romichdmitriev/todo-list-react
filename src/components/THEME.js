import styles from './App.scss';

const THEME = {
  img: {
    light: `${styles.img}`,
    dark: `${styles.img} ${styles.imgDark}`,
  },
  app: {
    light: `${styles.app} ${styles.appLight}`,
    dark: `${styles.app} ${styles.appDark}`,
  },
};

export default THEME;
