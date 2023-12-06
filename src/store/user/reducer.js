import { ADD_USER, DELETE_USER, SAVE_USER } from './types';

const defaultUser = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = defaultUser, action) => {
	switch (action.type) {
		// in this case we need to return
		case SAVE_USER:
			return action.payload;

		case ADD_USER:
			return [...state, action.payload];

		case DELETE_USER:
			return [...state.filter((el) => el.id !== action.payload.id)];

		default:
			return state;
	}
};
