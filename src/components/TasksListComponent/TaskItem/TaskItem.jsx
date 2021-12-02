import React from 'react';
import classNames from 'classnames';
import { useDispatchActions } from '../../../hooks/useDispatchActions';

import { todosActions } from '../../../store/rootActions';

import styles from './TaskItem.scss';

import { INPUT_ERROR_CLASSES, TASK_CLASSES } from './TASK';

const TaskItem = ({ task }) => {
  const { deleteTodo, editTodo, completeTodo } = useDispatchActions(todosActions);

  const editCurrentTask = ({ target }) => {
    const updatedTask = {
      ...task,
      text: target.value,
    };

    editTodo(updatedTask);
  };

  return (
    <li className={styles.task}>
      <div
        className={classNames({
          [TASK_CLASSES.completed.check]: task.completed,
          [TASK_CLASSES.uncompleted.check]: !task.completed,
        })}
        onClick={() => completeTodo(task.id)}>
        <div className={styles.checkBtnInner} />

        <svg className={styles.checkBtnIcon}>
          <use href='./assets/icons/sprite.svg#completed' />
        </svg>
      </div>

      <input
        type='text'
        className={classNames({
          [TASK_CLASSES.completed.input]: task.completed,
          [TASK_CLASSES.uncompleted.input]: !task.completed,
        })}
        defaultValue={task.text}
        onChange={editCurrentTask}
        required
      />
      <svg
        className={classNames({
          [INPUT_ERROR_CLASSES.invalid]: !task.text.length,
          [INPUT_ERROR_CLASSES.valid]: task.text.length,
        })}>
        <use href='./assets/icons/sprite.svg#warning' />
      </svg>

      <svg className={styles.deleteBtn} onClick={() => deleteTodo(task.id)}>
        <use href='./assets/icons/sprite.svg#delete-task' />
      </svg>
    </li>
  );
};

export default TaskItem;
