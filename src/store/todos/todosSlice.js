import { createSlice } from '@reduxjs/toolkit';

export const TODOS_SLICE = 'todosSlice';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: TODOS_SLICE,
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    editTodo: (state, action) => {
      state.items = state.items.map((item) => {
        return item.id === action.payload ? action.payload : item;
      });
    },

    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },

    completeTodo: (state, action) => {
      state.items = state.items.map((item) => {
        return item.id === action.payload ? { ...item, completed: true } : item;
      });
    },

    clearCompletedTodos: (state) => {
      state.items = state.items.filter((item) => !item.completed);
    },
  },
});

export const actions = todosSlice.actions;

export default todosSlice.reducer;
