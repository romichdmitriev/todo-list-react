import React from 'react';
import { screen } from '@testing-library/react';
import TasksList from './/TasksList';
import renderTestApp from '../../__test__/helpers/renderTestApp';

describe('TasksList', () => {
  test('list is rendering', () => {
    renderTestApp({
      component: <TasksList />,
    });
    const tasksList = screen.getByTestId('tasks-list');

    expect(tasksList).toBeInTheDocument();
  });
});
