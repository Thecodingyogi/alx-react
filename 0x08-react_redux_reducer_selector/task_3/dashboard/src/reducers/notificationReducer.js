import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      const updatedNotifications = action.data.map(notification => ({
        ...notification, isRead: false
      }));
      return {
        ...state, notifications: updatedNotifications
      };

    case 'MARK_AS_READ':
      const { index } = action;
      if (index >= 0 && index < state.notifications.length) {
        const updatedNotificationsMarkAsRead = state.notifications.map((notification, i) =>
          i === index ? { ...notification, isRead: true } : notification
        );
        return {
          ...state,
          notifications: updatedNotificationsMarkAsRead,
        };
      }
      return state;

    case 'SET_TYPE_FILTER':
      const { filter } = action;
      if (filter === 'DEFAULT' || filter === 'URGENT') {
        return { ...state, filter };
      }
      return state;

    default:
      return state;
  }
};

export default notificationReducer;
