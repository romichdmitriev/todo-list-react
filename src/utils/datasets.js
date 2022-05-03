import { uid } from 'uid';

const filtersList = [
  { id: uid(), name: 'all' },
  { id: uid(), name: 'active' },
  { id: uid(), name: 'completed' },
];

export default filtersList;
