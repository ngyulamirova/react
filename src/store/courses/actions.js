import { ADD_COURSE, SAVE_COURSES, DELETE_COURSES } from './types.js';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const deleteCoursesAction = (payload) => ({
	type: DELETE_COURSES,
	payload,
});
export const saveCoursesAction = (payload) => ({ type: SAVE_COURSES, payload });
