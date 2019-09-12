import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
	loading: true,
	error: '',
	post: {}
};

const reducer = (state, action) => {
	console.log(action);
	console.log(state);
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				error: '',
				post: action.payload
			};

		case 'FETCH_ERROR':
			return {
				loading: false,
				error: 'Something went Wrong',
				post: {}
			};
		default:
			return state;
	}
};

function DataFetchingTwo() {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	useEffect(() => {
		axios
			.get(`http://jsonplaceholder.typicode.com/posts/2`)
			.then((res) => {
				dispatch({
					type: 'FETCH_SUCCESS',
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_ERROR'
				});
			});
		return () => {
			return null;
		};
	}, []);
	return (
		<div>
			{state.loading ? 'loading' : state.post.title}
			{state.error ? state.error : null}
		</div>
	);
}

export default DataFetchingTwo;
