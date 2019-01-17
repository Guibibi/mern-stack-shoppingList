import axios from 'axios';
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from './types';

//Get the items from the database
export const getItems = () => (dispatch) => {
	dispatch(setItemsLoading());
	axios.get('/api/items').then((res) => dispatch({ type: GET_ITEMS, payload: res.data }));
};

//Add an item to the database
export const addItem = (item) => (dispatch) => {
	axios.post('/api/items', item).then((res) => dispatch({ type: ADD_ITEM, payload: res.data }));
};

//Delete Items
export const deleteItem = (id) => (dispatch) => {
	axios.delete(`/api/items/${id}`).then((res) => {
		return dispatch({ type: DELETE_ITEM, payload: id });
	});
};

//Set back the loading as true
export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};
