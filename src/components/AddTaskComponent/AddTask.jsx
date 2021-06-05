import React from "react";

import Task from "../../Objects/Task";

import completed from '../../assets/icons/completed.svg';

import './add-task.scss';

function AddTask({ tasks, setTasks, inputText, setInputText }) {
  const inputTextHandler = ({ target }) => setInputText(target.value);

  const addTaskByClick = () => {
    if (inputText.length) {
      const newTask = new Task(inputText);

      setInputText('');
      setTasks([...tasks, newTask]);
    }
  }

  const addTaskByKey = ({ key }) => {
    if (key === 'Enter') {
      if (inputText.length) {
        const newTask = new Task(inputText);

        setInputText('');
        setTasks([...tasks, newTask]);
      }
    }
  }

  return (
    <div className="content__add-task add-task" onKeyPress={addTaskByKey}>
      <div className="add-task__check" onClick={addTaskByClick}>
        <svg className="add-task__check-icon">
          <use xlinkHref='./assets/icons/sprite.svg#completed'></use>
        </svg>
      </div>

      <input type="text" className="add-task__input" onChange={inputTextHandler} value={inputText} placeholder="Create a new todo..." required/>
    </div>
  )
}

export default AddTask;
