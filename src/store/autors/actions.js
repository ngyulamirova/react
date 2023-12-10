import { ADD_AUTHORS, SAVE_AUTHORS, DELETE_AUTHORS } from './types.js';

export const addAuthorsAction = (payload) => ({ type: ADD_AUTHORS, payload });
export const deleteAuthorsAction = (payload) => ({
	type: DELETE_AUTHORS,
	payload,
});
export const saveAuthorsAction = (payload) => ({ type: SAVE_AUTHORS, payload });
