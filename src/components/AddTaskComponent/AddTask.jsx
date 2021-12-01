import React from 'react';

import Task from '../../Objects/Task';

import styles from './AddTask.scss';

const AddTask = ({ tasks, setTasks, inputText, setInputText }) => {
  const inputTextHandler = ({ target }) => setInputText(target.value);

  const addTaskByClick = () => {
    if (inputText.length) {
      const newTask = new Task(inputText);

      setInputText('');
      setTasks([...tasks, newTask]);
    }
  };

  const addTaskByKey = ({ key }) => {
    if (key === 'Enter') {
      if (inputText.length) {
        const newTask = new Task(inputText);

        setInputText('');
        setTasks([...tasks, newTask]);
      }
    }
  };

  return (
    <div className={`${styles.addTaskPosition} ${styles.addTask}`} onKeyPress={addTaskByKey}>
      <div className={styles.check} onClick={addTaskByClick}>
        <svg className={styles.checkIcon}>
          <use xlinkHref='./assets/icons/sprite.svg#completed' />
        </svg>
      </div>

      <input
        type='text'
        className={styles.input}
        onChange={inputTextHandler}
        value={inputText}
        placeholder='Create a new todo...'
        required
      />
    </div>
  );
};

export default AddTask;
