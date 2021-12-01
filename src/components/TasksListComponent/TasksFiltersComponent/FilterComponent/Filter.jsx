import React from 'react';

import _ from 'lodash';
import CLASSES from './FILTERS';

const Filter = ({ activeFilter, filterName, setActiveFilter }) => {
  const setClassForFilter = () => (activeFilter === filterName ? CLASSES.active : CLASSES.inactive);

  const setActiveStatusOfFilter = ({ target }) => {
    setActiveFilter(target.dataset.filter);
  };

  return (
    <div className={setClassForFilter()} data-filter={filterName} onClick={setActiveStatusOfFilter}>
      {_.upperFirst(filterName)}
    </div>
  );
};

export default Filter;
