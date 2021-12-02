import React from 'react';
import classNames from 'classnames';
import upperFirst from 'lodash.upperfirst';

import { useDispatchActions } from '../../../../hooks/useDispatchActions';
import { filterActions } from '../../../../store/rootActions';

import CLASSES from './FILTERS';

const Filter = ({ activeFilter, filterName }) => {
  const { setFilter } = useDispatchActions(filterActions);

  const setActiveStatusOfFilter = ({ target }) => {
    setFilter(target.dataset.filter);
  };

  return (
    <div
      className={classNames({
        [CLASSES.active]: activeFilter === filterName,
        [CLASSES.inactive]: activeFilter !== filterName,
      })}
      data-filter={filterName}
      onClick={setActiveStatusOfFilter}>
      {upperFirst(filterName)}
    </div>
  );
};

export default Filter;
