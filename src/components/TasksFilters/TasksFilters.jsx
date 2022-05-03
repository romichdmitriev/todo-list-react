import React from 'react';

import Filter from '@components/TasksFilters/Filter/Filter';
import filtersList from '@utils/datasets';

import styles from './TasksFilters.scss';
import useTodoActions from '@hooks/todos/useTodoActions';
import CONST_TEXT from '@constants/text';
import classnames from 'classnames';

const TasksFilters = ({ todosCount, isShowClearCompleted }) => {
  const { handleDeleteCompletedTodos } = useTodoActions();

  return (
    <div className={styles.filtersContainer} data-testid='tasks-filters'>
      <p className={styles.tasksCounter}>{`${todosCount} ${CONST_TEXT.todoCountRemain}`}</p>

      <div className={styles.filters}>
        {filtersList.map((filter) => (
          <Filter key={filter.id} filterName={filter.name} />
        ))}
      </div>

      <div
        className={classnames(styles.tasksClear, {
          [styles.tasksClearHidden]: isShowClearCompleted,
        })}
        role='button'
        aria-label='delete completed tasks'
        onClick={handleDeleteCompletedTodos}>
        {CONST_TEXT.deleteCompletedTodos}
      </div>
    </div>
  );
};

export default TasksFilters;
