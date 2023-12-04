import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer, notificationSchema } from '../schema/notifications';

export const initialState = fromJS({
  notifications: [],
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge(normalizedData.entities).set('filter', 'DEFAULT');

    case 'MARK_AS_READ':
      const { index } = action;
      if (index >= 0 && state.hasIn(['notifications', index])) {
        return state.setIn(['notifications', index, 'isRead'], true);
      }
      return state;

    case SET_TYPE_FILTER:
      const { filter } = action;
      if (filter === 'DEFAULT' || filter === 'URGENT') {
        return state.set('filter', filter);
      }
      return state;

    default:
      return state;
  }
};

export default notificationReducer;
