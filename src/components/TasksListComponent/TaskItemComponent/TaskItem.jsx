import React from "react";

import './task-item.scss';

import completed from '../../../assets/icons/completed.svg';
import warning from '../../../assets/icons/warning.svg';
import deleteTask from '../../../assets/icons/delete-task.svg';

import { TASK_CLASSES, INPUT_ERROR_CLASSES } from "../../../content/TASK";

const TaskItem = ({ currentTask, tasks, setTasks}) => {
  const activateCompletedStatus = () => currentTask.completed ? TASK_CLASSES.completed : TASK_CLASSES.uncompleted;

  const activateInputError = () => !currentTask.text.length ? INPUT_ERROR_CLASSES.invalid : INPUT_ERROR_CLASSES.valid;

  function updateCompletedStatusOfCurrentTask() {
    const updatedTask = {
      ...currentTask,
      completed: !currentTask.completed
    }

    const updatedTasks = tasks.map(task => task.id === currentTask.id ? updatedTask : task);

    setTasks(updatedTasks);
  }

  const updateTextOfCurrentTask = ({ target }) => {
    const updatedTask = {
      ...currentTask,
      text: target.value
    }

    const updatedTasks = tasks.map(task => task.id === currentTask.id ? updatedTask : task);

    setTasks(updatedTasks);
  }

  const deleteCurrentTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }

  return (
    <li className="tasks-lists__item task-item">
      <div className={activateCompletedStatus().check} onClick={updateCompletedStatusOfCurrentTask}>
        <div className="task-item__check-inner"></div>

        <svg className="task-item__check-icon">
          <use href="./assets/icons/sprite.svg#completed"></use>
        </svg>
      </div>

      <input type="text" className={activateCompletedStatus().input} defaultValue={currentTask.text} onChange={updateTextOfCurrentTask} required/>
      <svg className={ activateInputError() } >
        <use href="./assets/icons/sprite.svg#warning"></use>
      </svg>

      <svg className="task-item__delete" onClick={() => deleteCurrentTask(currentTask.id)}>
        <use href="./assets/icons/sprite.svg#delete-task"></use>
      </svg>
    </li>
  )
}

export default TaskItem;
