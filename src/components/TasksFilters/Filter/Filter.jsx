import React from 'react';
import classNames from 'classnames';

import useFilterTodos from '@hooks/todos/useFilterTodos';
import styles from './Filter.scss';
import UNIQUE_TEXT_KEYS from '@constants/unique-keys';

const Filter = ({ filterName }) => {
  const [filter, setFilter] = useFilterTodos();

  const setActiveStatusOfFilter = ({ target }) => {
    setFilter(target.dataset.filter);
  };

  return (
    <div
      className={classNames(styles.position, styles.filter, {
        [styles.filterActive]: (filter ?? UNIQUE_TEXT_KEYS.all) === filterName,
      })}
      data-filter={filterName}
      onClick={setActiveStatusOfFilter}>
      {filterName}
    </div>
  );
};

export default Filter;
