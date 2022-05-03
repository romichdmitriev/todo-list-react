import React, { useRef } from 'react';
import classNames from 'classnames';

import styles from './TaskItem.scss';

import useTodoActions from '@hooks/todos/useTodoActions';

import CheckIcon from '@assets/icons/completed.svg';
import DeleteIcon from '@assets/icons/delete-task.svg';
import WarningIcon from '@assets/icons/warning.svg';

const TaskItem = ({ task }) => {
  const inputRef = useRef();
  const { handleDeleteTodo, handleEditTodo, handleCompleteTodo } = useTodoActions();

  const editCurrentTask = ({ target }) => {
    const updatedTask = {
      ...task,
      text: target.value,
    };

    handleEditTodo(updatedTask);
  };

  const focusOnEmptyEditedTask = () => {
    if (inputRef.current && task.text.length < 4) {
      inputRef.current?.focus();
    }
  };

  return (
    <li className={styles.task} data-testid='task-item'>
      <div
        className={classNames(styles.checkBtn, {
          [styles.checkBtnCompleted]: task.completed,
        })}
        onClick={handleCompleteTodo(task.id)}>
        <span className={styles.checkBtnIcon}>
          <CheckIcon />
        </span>
      </div>

      <input
        data-testid='task-item-input'
        ref={inputRef}
        type='text'
        className={classNames(styles.input, {
          [styles.inputCompleted]: task.completed,
        })}
        defaultValue={task.text}
        onChange={editCurrentTask}
        onBlur={focusOnEmptyEditedTask}
        required
      />

      <WarningIcon
        className={classNames(styles.inputError, {
          [styles.inputErrorActive]: task.text.length < 4,
        })}
      />

      <DeleteIcon className={styles['delete-btn']} onClick={handleDeleteTodo(task.id)} />
    </li>
  );
};

export default TaskItem;
