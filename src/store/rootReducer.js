import { combineReducers } from '@reduxjs/toolkit';
import { authorsReducer } from './autors/reducer';
import { coursesReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
	authors: authorsReducer,
	courses: coursesReducer,
	user: userReducer,
});
