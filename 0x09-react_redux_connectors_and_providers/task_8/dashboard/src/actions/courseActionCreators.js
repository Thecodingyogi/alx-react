import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index
  };
}

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index
  };
}

export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export function setCourses(courses) {
  return {
    type: FETCH_COURSE_SUCCESS,
    courses: courses,
  };
}

export const fetchCourses = () => {
  return (dispatch) => {
    return fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((error) => {});
  };
};
