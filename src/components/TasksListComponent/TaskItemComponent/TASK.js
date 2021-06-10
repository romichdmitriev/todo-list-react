import styles from './TaskItem.scss';

const TASK_CLASSES = {
  completed: {
    check: `${styles.checkBtn} ${styles.checkBtnCompleted}`,
    input: `${styles.input} ${styles.inputCompleted}`
  },
  uncompleted: {
    check: `${styles.checkBtn}`,
    input: `${styles.input}`
  }
}

const INPUT_ERROR_CLASSES = {
  valid: `${styles.inputError}`,
  invalid: `${styles.inputError} ${styles.inputErrorActive}`
}

export { TASK_CLASSES, INPUT_ERROR_CLASSES };
