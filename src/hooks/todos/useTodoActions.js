import { useCallback } from 'react';

import useSelectorStore from '@hooks/useSelector';
import { todosSliceSelector } from '@store/rootSelector';
import useDispatchActions from '@hooks/useDispatchActions';
import { todosSliceActions } from '@store/rootActions';
import LocalStorage from '@service/LocalStorage';

const useTodoActions = () => {
  const todos = useSelectorStore(todosSliceSelector.selectTodos);
  const { loadTodos, addTodo, deleteTodo, editTodo, completeTodo, deleteCompletedTodos } =
    useDispatchActions(todosSliceActions);

  const handleLoadTodos = useCallback(() => {
    const savedTodos = LocalStorage.get('todos');
    loadTodos(savedTodos ?? []);
  }, [todos, addTodo]);

  const handleAddTodo = useCallback(
    (task) => {
      addTodo(task);

      const modifiedTodos = [task, ...todos];
      LocalStorage.set('todos', modifiedTodos);
    },
    [todos, addTodo],
  );

  const handleDeleteTodo = useCallback(
    (id) => () => {
      deleteTodo(id);

      const filteredTodos = todos.filter((item) => item.id !== id);
      LocalStorage.set('todos', filteredTodos);
    },
    [todos, addTodo],
  );

  const handleEditTodo = useCallback(
    (task) => {
      editTodo(task);

      const modifiedTodos = todos.map((item) => {
        return item.id === task.id ? task : item;
      });
      LocalStorage.set('todos', modifiedTodos);
    },
    [todos, addTodo],
  );

  const handleCompleteTodo = useCallback(
    (id) => () => {
      completeTodo(id);

      const modifiedTodos = todos.map((item) => {
        return item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item;
      });
      LocalStorage.set('todos', modifiedTodos);
    },
    [todos, addTodo],
  );

  const handleDeleteCompletedTodos = useCallback(() => {
    deleteCompletedTodos();

    const onlyActiveTodos = todos.filter((item) => !item.completed);
    LocalStorage.set('todos', onlyActiveTodos);
  }, [todos, addTodo]);

  return {
    handleLoadTodos,
    handleAddTodo,
    handleDeleteCompletedTodos,
    handleCompleteTodo,
    handleEditTodo,
    handleDeleteTodo,
  };
};

export default useTodoActions;
