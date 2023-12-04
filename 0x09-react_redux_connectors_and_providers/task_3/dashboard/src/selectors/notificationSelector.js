import { createSelector } from 'reselect';

const getNotificationState = state => state.get('notifications');

export const filterTypeSelected = createSelector(
  [getNotificationState],
  notifications => notifications.get('filter')
);

export const getNotifications = createSelector(
  [getNotificationState],
  notifications => notifications.get('notifications')
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  notifications => notifications.filter(notification => !notification.get('isRead'))
);
