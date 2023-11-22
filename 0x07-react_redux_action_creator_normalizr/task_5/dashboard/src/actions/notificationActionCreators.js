import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

export function markAsRead(index) {
  return {
    type:  MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}
