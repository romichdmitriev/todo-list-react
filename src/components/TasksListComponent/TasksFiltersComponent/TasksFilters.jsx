import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatchActions } from '../../../hooks/useDispatchActions';

import { selectActiveFilter } from '../../../store/filters/selector';
import { todosActions } from '../../../store/rootActions';

import Filter from './Filter/Filter';
import filtersList from '../../../utils/datasets';

import styles from './TasksFilters.scss';

const TasksFilters = ({ todosCount }) => {
  const activeFilter = useSelector(selectActiveFilter);

  const { clearCompletedTodos } = useDispatchActions(todosActions);

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.tasksCounter}>{todosCount} items left</div>

      <div className={styles.filters}>
        {filtersList.map((filter) => (
          <Filter key={filter.id} filterName={filter.name} activeFilter={activeFilter} />
        ))}
      </div>

      <div className={styles.tasksClear} onClick={clearCompletedTodos}>
        Clear Completed
      </div>
    </div>
  );
};

export default TasksFilters;
