import React, { useState } from 'react';

function HookCounterTwo() {
	const initialState = 0;
	const [ count, setCount ] = useState(initialState);

	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount + 1);
		}
	};
	return (
		<div>
			Count:{count}
			<button onClick={() => setCount(initialState)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
			<button onClick={incrementFive}>increment Five</button>
		</div>
	);
}

export default HookCounterTwo;
