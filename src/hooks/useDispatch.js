import { useContext } from 'react';
import { StoreContext } from '@store/store';

const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);

  return dispatch;
};

export default useDispatch;
