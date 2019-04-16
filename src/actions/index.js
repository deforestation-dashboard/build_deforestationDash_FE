import axios from 'axios';

export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export const getData = () => {
	console.log('getData called');
	return (dispatch) => {
		dispatch({
			type : GET_DATA_START
		});
		axios
			// .get('https://deforestation-dashboard.herokuapp.com/api')
			.get('https://deforestation-dashboard.herokuapp.com/forest')
			.then((res) => {
				console.log('here is the data', res);
				dispatch({
					type    : GET_DATA_SUCCESS,
					payload : res.data
				});
			})
			.catch((err) => {
				console.log('error', err);
				dispatch({
					type    : GET_DATA_FAILURE,
					payload : err
				});
			});
	};
};

export const GET_YEAR_START = 'GET_YEAR_START';
export const GET_YEAR_SUCCESS = 'GET_YEAR_SUCCESS';
export const GET_YEAR_FAILURE = 'GET_YEAR_FAILURE';

export const getYEAR = () => {
	console.log('getYEAR called');
	return (dispatch) => {
		dispatch({
			type : GET_YEAR_START
		});
		console.log('abaove axios');
		axios
			// .get('https://deforestation-dashboard.herokuapp.com/api')
			.get(`https://deforestation-dashboard.herokuapp.com/forest/1990/array`)
			.then((res) => {
				console.log('here is the YEAR', res);
				dispatch({
					type    : GET_YEAR_SUCCESS,
					payload : res.data
				});
			})
			.catch((err) => {
				console.log('error YEAR', err);
				dispatch({
					type    : GET_YEAR_FAILURE,
					payload : err
				});
			});
	};
};
