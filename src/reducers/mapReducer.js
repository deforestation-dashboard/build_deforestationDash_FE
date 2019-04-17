import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAILURE } from '../actions';
import { GET_YEAR_START, GET_YEAR_SUCCESS, GET_YEAR_FAILURE } from '../actions';

const initialState = {
	data    : [],
	loading : false,
	error   : null
};

export const mapReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA_START:
			return {
				...state,
				loading : true
			};
		case GET_DATA_SUCCESS:
			return {
				...state,
				loading : false,
				data    : action.payload,
				error   : null
			};
		case GET_DATA_FAILURE:
			return {
				...state,
				loading : false,
				error   : action.payload
			};
		case GET_YEAR_START:
			return {
				...state,
				loading : true
			};
		case GET_YEAR_SUCCESS:
			return {
				...state,
				loading : false,
				data    : action.payload,
				error   : null
			};
		case GET_YEAR_FAILURE:
			return {
				...state,
				loading : false,
				error   : action.payload
			};

		default:
			return state;
	}
};
