import React, { useState } from "react";

import Filter from "./FilterComponent/Filter";
import filtersList from "../../../Objects/Filters";

import './tasks-filters.scss';

const TasksFilters = ({ tasks, activeFilter, setActiveFilter, setTasks }) => {
  const [ filters, setFilters ] = useState(filtersList);

  const deleteCompletedTasks = () => {
    const filteredTasks = tasks.activeFilter((task) => !task.completed);
    setTasks(filteredTasks);
  }

  return (
    <div className="tasks-filters-container">
      <div className="tasks__counter">
        {tasks.length} items left
      </div>

      <div className="tasks__filters">
        {filters.map(filter => <Filter key={filter.id} filterName={filter.name} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>)}
      </div>

      <div className="tasks__clear" onClick={() => deleteCompletedTasks()}>
        Clear Completed
      </div>
    </div>
  )
}

export default TasksFilters;
