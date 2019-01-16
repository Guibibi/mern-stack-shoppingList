import uuid from 'uuid';
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from '../actions/types';

const initialState = {
	items: [
		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Water' },
		{ id: uuid(), name: 'Donuts' }
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ITEMS:
			return { ...state };

		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload)
			};

		case ADD_ITEM:
			return {
				...state,
				items: [ action.payload, ...state.items ]
			};

		default:
			return state;
	}
};
