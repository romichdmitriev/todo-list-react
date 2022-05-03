import React, { useState } from 'react';
import classnames from 'classnames';

// hooks
import useTodoActions from '@hooks/todos/useTodoActions';

// components
import CheckIcon from '@assets/icons/completed.svg';

// styles
import styles from './TaskInput.scss';

// service
import createTask from '@service/TaskService';
import CONST_TEXT from '@constants/text';

const TaskInput = () => {
  const { handleAddTodo } = useTodoActions();

  const [inputText, setInputText] = useState('');

  const onInputChange = ({ target }) => setInputText(target.value);

  const addTodo = () => {
    const newTask = createTask(inputText);

    setInputText('');
    handleAddTodo(newTask);
  };

  const addTaskByClick = () => {
    if (!inputText || inputText.length < 4) {
      return;
    }

    addTodo();
  };

  const addTaskByKey = ({ key }) => {
    if (!inputText.length || key !== 'Enter' || inputText.length < 4) {
      return;
    }

    addTodo();
  };

  return (
    <div role='task-input' className={classnames(styles.addTaskPosition, styles.addTask)} onKeyDown={addTaskByKey}>
      {inputText && (
        <div role='add-todo-button' data-testid='add-task-button' className={styles.check} onClick={addTaskByClick}>
          <CheckIcon color='white' />
        </div>
      )}

      <input
        type='text'
        className={styles.input}
        onChange={onInputChange}
        value={inputText}
        placeholder={CONST_TEXT.todoCreateInputPlaceholder}
        required
      />
    </div>
  );
};

export default TaskInput;
