import { ADD_COURSE, SAVE_COURSES, DELETE_COURSES } from './types.js';

const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
const deleteCoursesAction = (payload) => ({ type: DELETE_COURSES, payload });
const saveCoursesAction = (payload) => ({ type: SAVE_COURSES, payload });
