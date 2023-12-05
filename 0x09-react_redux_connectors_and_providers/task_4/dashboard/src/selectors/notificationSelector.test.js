import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from '../selectors/notificationSelector';

describe('Tests for Notification Selectors', () => {
  const initialState = fromJS({
    notifications: {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
        { id: 2, isRead: true, type: 'urgent', value: 'Notification 2' },
        { id: 3, isRead: false, type: 'default', value: 'Notification 3' },
      ],
    },
  });

  it('Should test filterTypeSelected works as expected', () => {
    const result = filterTypeSelected(initialState);
    expect(result).toBe('DEFAULT');
  });

  it('Should test getNotifications returns a list of the notifications', () => {
    const result = getNotifications(initialState);
    expect(result.size).toBe(3);
  });

  it('Should test getUnreadNotifications returns a list of unread notifications', () => {
    const result = getUnreadNotifications(initialState);
    expect(result.size).toBe(2);
    expect(result.getIn([0, 'value'])).toBe('Notification 1');
    expect(result.getIn([1, 'value'])).toBe('Notification 3');
  });
});
