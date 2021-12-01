import filterHandlers from '../../utils/filterHandlers';

export const selectTodos = (state) => {
  const activeFilter = state.filters.activeFilter;
  return state.todos.items.filter(filterHandlers[activeFilter]);
};
