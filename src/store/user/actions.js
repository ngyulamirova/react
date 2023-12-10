import { ADD_USER, SAVE_USER, DELETE_USER } from './types.js';

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const deleteUserAction = (payload) => ({ type: DELETE_USER, payload });
export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
