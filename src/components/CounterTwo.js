import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	seconderCounter: 10
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'increment2':
			return { ...state, seconderCounter: state.seconderCounter + action.value };
		case 'decrement2':
			return { ...state, seconderCounter: state.seconderCounter - action.value };
		case 'reset':
			return initialState;

		default:
			return state;
	}
};

function CounterTwo() {
	const [ count, dispatch ] = useReducer(reducer, initialState);
	return (
		<div>
			<div>First Count - {count.firstCounter}</div>
			<div>Second Count - {count.seconderCounter}</div>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Dcrement</button>
			<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment 2</button>
			<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Dcrement2</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment Five</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Dcrement Five</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</div>
	);
}

export default CounterTwo;
