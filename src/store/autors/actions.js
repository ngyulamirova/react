import { ADD_AUTHOR, SAVE_AUTHORS, DELETE_AUTHORS } from './types.js';

const addAuthorAction = (payload) => ({ type: ADD_AUTHOR, payload });
const deleteAuthorsAction = (payload) => ({ type: DELETE_AUTHORS, payload });
const saveAuthorsAction = (payload) => ({ type: SAVE_AUTHORS, payload });
