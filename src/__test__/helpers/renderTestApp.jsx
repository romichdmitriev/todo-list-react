import React from 'react';
import { StoreProvider } from '../../store/store';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const AppWrapper = ({ children, initialRoute }) => {
  return (
    <StoreProvider>
      <MemoryRouter initialEntries={initialRoute}>{children}</MemoryRouter>
    </StoreProvider>
  );
};

const renderTestApp = ({ component = null, initialRoute = ['/'], options }) =>
  render(<AppWrapper initialRoute={initialRoute}>{component}</AppWrapper>, options);

export default renderTestApp;
