import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

const useFilterTodos = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setFilter = useCallback((filter) => {
    setSearchParams({
      filter,
    });
  }, []);

  return [searchParams.get('filter'), setFilter];
};

export default useFilterTodos;
