import { ADD_USER, SAVE_USER, DELETE_USER } from './types.js';

const addUserAction = (payload) => ({ type: ADD_USER, payload });
const deleteUserAction = (payload) => ({ type: DELETE_USER, payload });
const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
