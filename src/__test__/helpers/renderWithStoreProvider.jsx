import React from 'react';
import { StoreProvider } from '../../store/store';
import { render } from '@testing-library/react';

const StoreWrapper = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

const renderWithStoreProvider = ({ component = null, options }) =>
  render(<StoreWrapper>{component}</StoreWrapper>, options);

export default renderWithStoreProvider;
