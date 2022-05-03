import { useContext } from 'react';
import { StoreContext } from '@store/store';

/**
 * @param stateSelector возвращает слайс из глобального стора (state: Store) => Store
 */

const useSelectorStore = (stateSelector) => {
  const { store } = useContext(StoreContext);

  if (typeof stateSelector !== 'function') {
    throw new Error('Please provide right type of selector');
  }

  try {
    return stateSelector(store);
  } catch (error) {
    console.error(error);
  }
};

export default useSelectorStore;
