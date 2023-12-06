import { ADD_AUTHOR, DELETE_AUTHORS, SAVE_AUTHORS } from './types';

export const authorsReducer = (state = [], action) => {
	switch (action.type) {
		// in this case we need to return
		case SAVE_AUTHORS:
			return action.payload;

		case ADD_AUTHOR:
			return [...state, action.payload];

		case DELETE_AUTHORS:
			return [...state.filter((el) => el.id !== action.payload.id)];

		default:
			return state;
	}
};
