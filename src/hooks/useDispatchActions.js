import useDispatch from '@hooks/useDispatch';
import { useMemo } from 'react';

/**
    @param actions объект из action creators (payload: any) => { type: string, payload }
*/

const useDispatchActions = (actions) => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const dispatchdedActions = {};

    for (let [actionName, action] of Object.entries(actions)) {
      dispatchdedActions[actionName] = (payload) => {
        dispatch(action(payload));
      };
    }

    return dispatchdedActions;
  }, []);
};

export default useDispatchActions;
