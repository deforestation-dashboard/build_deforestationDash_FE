import { GET_COUNTRY_START, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILURE } from '../actions';

const initialState = {
	data    : [],
	loading : false,
	error   : null
};

export const countryReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRY_START:
			return {
				...state,
				loading : true
			};
		case GET_COUNTRY_SUCCESS:
			return {
				...state,
				loading : false,
				data    : action.payload,
				error   : null
			};
		case GET_COUNTRY_FAILURE:
			return {
				...state,
				loading : false,
				error   : action.payload
			};
		default:
			return state;
	}
};
