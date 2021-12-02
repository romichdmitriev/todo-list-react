import { configureStore } from '@reduxjs/toolkit';
import * as reducers from './rootReducer';

export const store = configureStore({
  reducer: {
    ...reducers,
  },
});
