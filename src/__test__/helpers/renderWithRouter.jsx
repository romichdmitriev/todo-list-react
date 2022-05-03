import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const RouterWrapper = ({ children, initialRoute }) => {
  return <MemoryRouter initialEntries={initialRoute}>{children}</MemoryRouter>;
};

const renderWithRouter = ({ component = null, initialRoute = ['/'], options =  }) =>
  render(<RouterWrapper initialRoute={initialRoute}>{component}</RouterWrapper>, options);

export default renderWithRouter;
