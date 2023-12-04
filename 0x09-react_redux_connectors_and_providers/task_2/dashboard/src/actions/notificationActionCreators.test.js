import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe("Tests the Notifications action creators", () => {
  it("Should return the correct output for markAsRead action", () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });
  it("Should return correct output for the setNotificationFilter", () => {
    expect(setNotificationFilter(NotificationTypeFilters["DEFAULT"])).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    });
  });
});
