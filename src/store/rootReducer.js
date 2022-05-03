import { todosInitialState, todosReducer } from './todos/reducer';
import { themeInitialState, themeReducer } from './theme/reducer';
import reducerFactory from '../utils/reducerFactory';

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
