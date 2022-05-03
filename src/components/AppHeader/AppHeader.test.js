import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// components
import renderTestApp from '@test/helpers/renderTestApp';
import App from '@components/App';

// mocks
import '@test/stubs/matchMedia';

// utils
import UNIQUE_TEXT_KEYS from '@constants/unique-keys';

describe('AppHeader component', () => {
  beforeEach(() => {
    localStorage.clear();
    renderTestApp({
      component: <App />,
    });
  });

  test('is rendering AppHeader component', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('toggle switcher is changing background image of header banner', async () => {
    const currentTheme = document.firstElementChild.dataset.theme;
    const themeCheckbox = screen.getByRole('checkbox');

    await userEvent.click(themeCheckbox);

    const newTheme = document.firstElementChild.dataset.theme;
    expect(newTheme).toBe(currentTheme === UNIQUE_TEXT_KEYS.light ? UNIQUE_TEXT_KEYS.dark : UNIQUE_TEXT_KEYS.light);
  });
});
