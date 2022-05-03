import TODO_ACTION_TYPES from './types';

export const todosInitialState = {
  todos: [],
};

export const todosReducer = {
  [TODO_ACTION_TYPES['todos/todos-loaded']]: (state, action) => {
    return {
      todos: action.payload,
    };
  },

  [TODO_ACTION_TYPES['todos/todo-added']]: (state, action) => {
    return {
      todos: [action.payload, ...state.todos],
    };
  },

  [TODO_ACTION_TYPES['todos/todo-deleted']]: (state, action) => {
    return {
      todos: state.todos.filter((item) => item.id !== action.payload),
    };
  },

  [TODO_ACTION_TYPES['todos/todo-edited']]: (state, action) => {
    return {
      todos: state.todos.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      }),
    };
  },

  [TODO_ACTION_TYPES['todos/todo-completed']]: (state, action) => {
    return {
      todos: state.todos.map((item) => {
        return item.id === action.payload ? { ...item, completed: !item.completed } : item;
      }),
    };
  },

  [TODO_ACTION_TYPES['todos/completed-todos-cleared']]: (state) => {
    return {
      todos: state.todos.filter((item) => !item.completed),
    };
  },
};
