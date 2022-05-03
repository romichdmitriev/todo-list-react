import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TasksFilters from '@components/TasksFilters/TasksFilters';
import renderTestApp from '@test/helpers/renderTestApp';
import TasksList from '@components/TasksList/TasksList';

describe('TasksFilters', () => {
  test('TasksFilters is rendering', () => {
    renderTestApp({
      component: <TasksFilters />,
    });

    const tasksFilters = screen.getByTestId('tasks-filters');
    expect(tasksFilters).toBeInTheDocument();
  });

  test('TasksFilters is rendering right count of items', () => {
    renderTestApp({
      component: <TasksFilters todosCount={5} />,
    });

    const tasksFilters = screen.getByText(/items left/g);
    console.log(tasksFilters);
    const itemsCount = tasksFilters.textContent?.split(' ')?.[0];

    expect(itemsCount).toBe('5');
  });

  test('deleting completed tasks', () => {
    renderTestApp({
      component: (
        <>
          <TasksList />
        </>
      ),
    });

    const deleteCompletedTasksButton = screen.getByText(/Clear completed/i);
    userEvent.click(deleteCompletedTasksButton);

    const showOnlyCompletedButton = screen.getByText(/^Completed$/i);
    userEvent.click(showOnlyCompletedButton);

    expect(screen.queryAllByTestId('task-item')).toEqual([]);
  });
});
