import uniqueId from 'lodash.uniqueid';

const filtersList = [
  { id: uniqueId(), name: 'all' },
  { id: uniqueId(), name: 'active' },
  { id: uniqueId(), name: 'completed' },
];

export default filtersList;
