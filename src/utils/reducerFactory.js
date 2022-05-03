const reducerFactory = (handlers) => (state, action) => {
  if (handlers[action.type]) {
    return {
      ...state,
      ...handlers[action.type](state, action),
    };
  }

  return state;
};

export default reducerFactory;
