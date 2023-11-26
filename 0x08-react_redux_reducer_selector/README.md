# React Redux Reducer + Selector
This Directory contains a comprehensive project aimed at enhancing React Redux applications by focusing on robust state management, immutability, and efficient data access.

## Project Structure
### 1. Basic Reducer (uiReducer)
- **reducers/uiReducer.js:** Defines the initial state and implements a reducer function for UI-related actions.
- **reducers/uiReducer.test.js:** Contains tests ensuring the correctness of the UI reducer.
### 2. Immutable for UI Reducer
- **reducers/uiReducer.js:** Integrates Immutable.js for enhanced performance.
- **reducers/uiReducer.test.js:** Updates tests to reflect changes with Immutable.js.
### 3. Courses Reducer
- **actions/courseActionTypes.js:** Defines actions related to loading and managing courses.
- **reducers/courseReducer.js:** Implements a reducer for courses with default and action-based states.
- **reducers/courseReducer.test.js:** Tests to validate the functionality of the courses reducer.
### 4. Notifications Reducer
- **actions/notificationActionTypes.js:** Contains actions for loading and manipulating notifications.
- **reducers/notificationReducer.js:** Implements a reducer for notifications with default states.
- **reducers/notificationReducer.test.js:** Tests ensuring the correct functioning of the notification reducer.
### 5. Selectors
- **selectors/notificationSelector.js:** Builds selectors for efficient data retrieval from the Notifications reducer.
- **selectors/notificationSelector.test.js:** Tests verifying the correct functioning of selectors.
