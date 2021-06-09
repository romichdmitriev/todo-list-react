import _ from 'lodash';

const filtersList = [
  {id: _.uniqueId(), name: 'all'},
  {id: _.uniqueId(), name: 'active'},
  {id: _.uniqueID(), name: 'completed'}
];

export default filtersList;
