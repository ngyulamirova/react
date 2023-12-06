import { ADD_COURSE, DELETE_COURSES, SAVE_COURSES } from './types';

export const coursesReducer = (state = [], action) => {
	switch (action.type) {
		case SAVE_COURSES:
			return action.payload;

		case ADD_COURSE:
			return [...state, action.payload];

		case DELETE_COURSES:
			return [...state.filter((el) => el.id !== action.payload.id)];

		default:
			return state;
	}
};
