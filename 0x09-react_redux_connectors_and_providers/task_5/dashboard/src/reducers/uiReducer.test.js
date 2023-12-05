import uiReducer, { initialState } from './uiReducer';

describe("Test the uiReducer file", () => {
  // Tests to verify the state returned by uiReducer function when no action is passed
  it("Should return the initial state", () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  // Tests to veridy the state returned when SELECT_COURSE action is passed
  it("Should return the initial state when an unknown action is passed", () => {
    const state = uiReducer(initialState, { type: "SELECT_COURSE" });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  // Tests to verify the state returned when the DISPLAY_NOTIFICATION_DRAWER action is passed
  it("Should display the DISPLAY_NOTIFICATION_DRAWER action correctly", () => {
    const state = uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(state.toJS().isNotificationDrawerVisible).toBe(true);
  });
});
