import React, { useState } from 'react';
import { useDispatchActions } from '../../hooks/useDispatchActions';
import { todosActions } from '../../store/rootActions';

import Task from '../../Objects/Task';

import styles from './TaskInput.scss';

const TaskInput = () => {
  const { addTodo } = useDispatchActions(todosActions);

  const [inputText, setInputText] = useState('');

  const onInputChange = ({ target }) => setInputText(target.value);

  const addTaskByClick = () => {
    if (!inputText) {
      return;
    }

    const newTask = new Task(inputText);

    setInputText('');
    addTodo(newTask);
  };

  const addTaskByKey = ({ key }) => {
    if (!inputText.length || key !== 'Enter') {
      return;
    }

    const newTask = new Task(inputText);

    setInputText('');
    addTodo(newTask);
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
        onChange={onInputChange}
        value={inputText}
        placeholder='Create a new todo...'
        required
      />
    </div>
  );
};

export default TaskInput;
