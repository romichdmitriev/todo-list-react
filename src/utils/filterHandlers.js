const filterHandlers = {
  all: (task) => true,
  active: (task) => !task.completed,
  completed: (task) => task.completed
}

export default filterHandlers;
