import React, { useState } from "react";

import Filter from "./FilterComponent/Filter";
import filtersList from "../../../Objects/Filters";

import styles from './TasksFilters.scss';

const TasksFilters = ({ tasks, activeFilter, setActiveFilter, setTasks }) => {
  const [ filters, setFilters ] = useState(filtersList);

  const deleteCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
  }

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.tasksCounter}>
        {tasks.length} items left
      </div>

      <div className={styles.filters}>
        {filters.map(filter => <Filter key={filter.id} filterName={filter.name} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>)}
      </div>

      <div className={styles.tasksClear} onClick={() => deleteCompletedTasks()}>
        Clear Completed
      </div>
    </div>
  )
}

export default TasksFilters;
