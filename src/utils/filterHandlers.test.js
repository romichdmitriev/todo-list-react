import filterHandlers from './filterHandlers';

const tasks = [
  {
    id: 1,
    completed: false,
    text: 'Gooooo',
  },
  {
    id: 2,
    completed: false,
    text: 'Gooooo',
  },
  {
    id: 3,
    completed: true,
    text: 'Gooooo',
  },
];

describe('Check filtration of tasks', () => {
  test('Return all tasks', () => {
    const value = tasks.filter(filterHandlers.all);

    expect(value).toEqual(tasks);
  });

  test('check filtration of active tasks', () => {
    const value = tasks.filter(filterHandlers.completed);

    value.forEach((item) => {
      expect(item).not.toHaveProperty('completed', false);
    });
  });

  test('check filtration of completed tasks', () => {
    const value = tasks.filter(filterHandlers.active);

    value.forEach((item) => {
      expect(item).not.toHaveProperty('completed', true);
    });
  });

  /* corner cases */
  test('check filtration of empty array with all filter', () => {
    const value = [].filter(filterHandlers.all);

    expect(value).toEqual([]);
  });

  test('check filtration of empty array  with active filter', () => {
    const value = [].filter(filterHandlers.active);

    expect(value).toEqual([]);
  });

  test('check filtration of empty array  with completed filter', () => {
    const value = [].filter(filterHandlers.completed);

    expect(value).toEqual([]);
  });
});
