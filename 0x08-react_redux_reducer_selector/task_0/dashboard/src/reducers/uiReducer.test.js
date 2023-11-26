import { uiReducer } from './uiReducer';

describe("Test the uiReducer file", () => {
  // Tests to verify the state returned by uiReducer function when no action is passed
  it("Should return the initial state", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  // Tests to veridy the state returned when SELECT_COURSE action is passed
  it("Should return the initial state when an unknown action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(initialState, { type: "SELECT_COURSE" });
    expect(state).toEqual(initialState);
  });

  // Tests to verify the state returned when the DISPLAY_NOTIFICATION_DRAWER action is passed
  it("Should display the DISPLAY_NOTIFICATION_DRAWER action correctly", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(state.isNotificationDrawerVisible).toEqual(true);
  });
});
