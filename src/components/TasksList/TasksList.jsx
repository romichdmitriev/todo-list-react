import React, { useMemo } from 'react';

// hooks
import useSelectorStore from '@hooks/useSelector';
import useFilterTodos from '@hooks/todos/useFilterTodos';
import useTodoActions from '@hooks/todos/useTodoActions';
import useEffectOnce from '@hooks/useEffectOnce';

// store
import { todosSliceSelector } from '@store/rootSelector';

import TaskItem from '@components/TasksList/TaskItem/TaskItem';
import TasksFilters from '@components/TasksFilters/TasksFilters';

// styles
import styles from './TasksList.scss';

// utils
import filterHandlers from '@utils/filterHandlers';
import UNIQUE_TEXT_KEYS from '@constants/unique-keys';

const TasksList = () => {
  const todos = useSelectorStore(todosSliceSelector.selectTodos);
  const { handleLoadTodos } = useTodoActions();
  const [filter] = useFilterTodos();

  useEffectOnce(() => {
    handleLoadTodos();
  }, []);

  const filteredTodos = useMemo(() => todos.filter(filterHandlers[filter ?? UNIQUE_TEXT_KEYS.all]), [todos, filter]);

  const completedTodosCounter = useMemo(() => todos.filter(filterHandlers[UNIQUE_TEXT_KEYS.completed]).length, [todos]);

  return (
    <div data-testid='tasks-list' className={styles.tasks}>
      <ul className={styles.tasksList}>
        {filteredTodos.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>

      <TasksFilters
        todosCount={todos.filter(filterHandlers[UNIQUE_TEXT_KEYS.active]).length}
        isShowClearCompleted={!completedTodosCounter}
      />
    </div>
  );
};

export default TasksList;
