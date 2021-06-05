const TASK_CLASSES = {
  completed: {
    check: 'task-item__check task-item__check--completed',
    input: 'task-item__input task-item__input--completed'
  },
  uncompleted: {
    check: 'task-item__check',
    input: 'task-item__input'
  }
}

const INPUT_ERROR_CLASSES = {
  valid: "task-item__input-error",
  invalid: "task-item__input-error task-item__input-error--active"
}

export { TASK_CLASSES, INPUT_ERROR_CLASSES };
