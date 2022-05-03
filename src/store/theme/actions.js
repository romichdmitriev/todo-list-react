import actionCreator from '@utils/actionCreator';
import THEME_ACTION_TYPES from './types';

export default {
  changeTheme: actionCreator(THEME_ACTION_TYPES['theme/theme-changed']),
};
