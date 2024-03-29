import axios from 'axios';

export const fetchingData = (num) => async (dispatch) => {
	num
		? axios
				.get(`https://rickandmortyapi.com/api/character/?page=${num}`)
				.then((response) => dispatch(setData(response.data)))
		: axios
				.get('https://rickandmortyapi.com/api/character/')
				.then((response) => dispatch(setData({ data: response.data })));
};

export const setData = (data) => ({
	type: 'SET_DATA',
	payload: data,
});

export const setFetching = (payload) => ({
	type: 'SET_DATA_FETCHING',
	payload,
});
