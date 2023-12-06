import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer, notificationSchema } from '../schema/notifications';

export const initialState = fromJS({
  notifications: [],
  filter: 'DEFAULT',
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep(normalizedData.entities).set('filter', 'DEFAULT').set('loading', false);

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

    case SET_LOADING_STATE:
      const { isLoading } = action;
      return state.set('loading', isLoading);

    default:
      return state;
  }
};

export default notificationReducer;
