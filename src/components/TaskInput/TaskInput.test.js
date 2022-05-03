import React from 'react';
import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TaskInput from './TaskInput';
import TasksList from '@components/TasksList/TasksList';
import renderTestApp from '@test/helpers/renderTestApp';
import LocalStorage from '@service/LocalStorage';

describe('TaskInput', () => {
  let taskInput;

  beforeEach(() => {
    LocalStorage.remove('todos');
    renderTestApp({
      component: (
        <>
          <TaskInput />
          <TasksList />
        </>
      ),
    });
    taskInput = screen.getByPlaceholderText(/Create a new todo.../i);
  });

  test('is rendering on page', async () => {
    expect(taskInput).toBeInTheDocument();
  });

  test('is input show correct user input', async () => {
    await userEvent.type(taskInput, '123123123');
    expect(taskInput.value).toBe('123123123');
  });

  test('render add task button, if input value exists', async () => {
    let addTaskButton = screen.queryByTestId(/add-task-button/i);
    expect(addTaskButton).toBeNull();

    await userEvent.type(taskInput, '123123123');
    addTaskButton = screen.queryByTestId(/add-task-button/i);
    expect(addTaskButton).toBeInTheDocument();
  });

  test('test add todo, clicking on add task button', async () => {
    await userEvent.type(taskInput, '123123123');

    const addTaskButton = screen.queryByTestId(/add-task-button/i);
    await userEvent.click(addTaskButton);

    const todos = screen.queryAllByTestId(/^task-item$/i);
    expect(todos.length).toBe(1);

    const todoValue = getByTestId(todos[0], /^task-item-input$/i).value;
    expect(todoValue).toBe('123123123');
  });

  test('test add todo, clicking on press enter', async () => {
    await userEvent.type(taskInput, '123123123');

    await userEvent.keyboard('{Enter}');

    const todos = screen.queryAllByTestId(/^task-item$/i);
    expect(todos.length).toBe(1);

    const todoValue = getByTestId(todos[0], /^task-item-input$/i).value;
    expect(todoValue).toBe('123123123');
  });
});
