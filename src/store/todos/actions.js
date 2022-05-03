import actionCreator from '@utils/actionCreator';
import TODO_ACTION_TYPES from './types';

export default {
  loadTodos: actionCreator(TODO_ACTION_TYPES['todos/todos-loaded']),

  addTodo: actionCreator(TODO_ACTION_TYPES['todos/todo-added']),

  editTodo: actionCreator(TODO_ACTION_TYPES['todos/todo-edited']),

  deleteTodo: actionCreator(TODO_ACTION_TYPES['todos/todo-deleted']),

  completeTodo: actionCreator(TODO_ACTION_TYPES['todos/todo-completed']),

  filterTodos: actionCreator(TODO_ACTION_TYPES['todos/todos-filtered']),

  deleteCompletedTodos: actionCreator(TODO_ACTION_TYPES['todos/completed-todos-cleared']),
};
