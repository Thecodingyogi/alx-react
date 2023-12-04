import notificationReducer, { initialState } from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER} from '../actions/notificationActionTypes';

describe("Tests the notifications reducer file", () => {
  it("Should test that the initial state is correct", () => {
   const state = notificationReducer(undefined, {});
   expect(state).toEqual(initialState);
  });

  it("Should test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", () => {
    const notificationsData = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notificationsData };
    const state = notificationReducer(initialState, action);
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        }
      ],
    };
    expect(state).toEqual(expectedState);
  });

  it("Should test that MARK_AS_READ returns the right updated data", () => {
    const initialStateWithData = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 0,
    };
    const state = notificationReducer(initialStateWithData, action);
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: true,
          type: 'default',
          value: 'New course available',
        },
      ],
    };
    expect(state).toEqual(expectedState);
  });

  it('Should test that SET_TYPE_FILTER returns the right updated data', () => {
    const initialStateWithData = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
      ],
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };
    const state = notificationReducer(initialStateWithData, action);
    const expectedState = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
      ],
    };
    expect(state).toEqual(expectedState);
  });
});
