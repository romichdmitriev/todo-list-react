import React, { createContext, useReducer } from 'react';
import Store from './rootReducer';

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(Store.rootReducer, Store.rootInitialState);

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
