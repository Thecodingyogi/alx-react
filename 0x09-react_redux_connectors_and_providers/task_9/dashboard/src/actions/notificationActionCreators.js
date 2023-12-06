import {
  MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters,
  SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export function markAsRead(index) {
  return {
    type:  MARK_AS_READ,
    index,
  };
}

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
}

export function setNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,
  };
}

export function fetchNotifications() {
  return {
    // Dispatch setLoadingState with true to indicate loading
    setLoading: () => dispatch(setLoadingState(true)),

    // Simulate an API call to fetch notifications from /notifications.json
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        // Dispatch setNotifications with the fetched data
	dispatch(setNotifications(data));
	// Set loading state to false after successful fetch
	dispatch(setLoading(false));
      })
      .catch((error) => {
        // Handle error if the fetch fails
	console.error('Error fetching notifications:', error);
	// Set loading state to false in case of an error
        dispatch(setLoadingState(false));
      });
  };
}

