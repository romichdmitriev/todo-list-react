import React from "react";

import getFirstUCWord from "../../../../utils/getFirstUCWord";

import './filter.scss';

import {FILTER_STATUS_CLASSES} from "../../../../content/FILTERS";

const Filter = ({ activeFilter, filterName, setActiveFilter }) => {
  const setClassForFilter = () => activeFilter === filterName  ? FILTER_STATUS_CLASSES.active : FILTER_STATUS_CLASSES.inactive;

  const setActiveStatusOFFilter = ({ target }) => {
    setActiveFilter(target.dataset.filter);
  }

  return (
    <div className={ setClassForFilter() } data-filter={filterName} onClick={ setActiveStatusOFFilter }>
      {getFirstUCWord(filterName)}
    </div>
  )
}

export default Filter;
