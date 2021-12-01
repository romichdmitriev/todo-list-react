const filterHandlers = {
  all: () => true,
  active: (task) => !task.completed,
  completed: (task) => task.completed,
};

export default filterHandlers;
