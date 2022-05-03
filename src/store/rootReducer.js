import { todosInitialState, todosReducer } from '@store/todos/reducer';
import { themeInitialState, themeReducer } from '@store/theme/reducer';
import reducerFactory from '@utils/reducerFactory';

const rootInitialState = {
  ...todosInitialState,
  ...themeInitialState,
};
const rootReducer = reducerFactory({
  ...todosReducer,
  ...themeReducer,
});

const Store = {
  rootInitialState,
  rootReducer,
};

export default Store;
