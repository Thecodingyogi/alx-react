import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', true);

    case 'HIDE_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', false);

    case 'LOGIN_SUCCESS':
      return state.set('isUserLoggedIn', true).set('user', Map(action.user));

    case 'LOGIN_FAILURE':
    case 'LOGOUT':
      return state.set('isUserLoggedIn', false).set('user', Map({}));

    default:
      return state;
  }
};

export default uiReducer;
