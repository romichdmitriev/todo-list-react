import React from "react";

import _ from 'lodash';

import './filter.scss';

import {FILTER_STATUS_CLASSES} from "../../../../content/FILTERS";

const Filter = ({ activeFilter, filterName, setActiveFilter }) => {
  const setClassForFilter = () => activeFilter === filterName  ? FILTER_STATUS_CLASSES.active : FILTER_STATUS_CLASSES.inactive;

  const setActiveStatusOFFilter = ({ target }) => {
    setActiveFilter(target.dataset.filter);
  }

  return (
    <div className={ setClassForFilter() } data-filter={filterName} onClick={ setActiveStatusOFFilter }>
      {_.upperFirst(filterName)}
    </div>
  )
}

export default Filter;
