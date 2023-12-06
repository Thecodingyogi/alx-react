import courseReducer, { initialState } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer, courseSchema } from '../schema/courses';

describe("Tests the course Reducer file", () => {
  it("Should Test that the initial state returns an empty array", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("Should test that FETCH_COURSE_SUCCESS returns the data passed", () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const normalizedData = coursesNormalizer(data);
    const action = { type: FETCH_COURSE_SUCCESS, data };
    const state = courseReducer(undefined, action);

    expect(state.equals(fromJS(normalizedData.entities))).toBe(true);
  });

  it("Should test that SELECT_COURSE returns the right updated data", () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: SELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action);
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(state).toEqual(expectedState);
  });

  it("Should test that UNSELECT_COURSE returns the right updated data", () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: UNSELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action);
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(state).toEqual(expectedState);
  });
});
