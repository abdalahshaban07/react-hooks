import React, { useState, useEffect } from 'react';

function HookCounterOne() {
	const [ count, setCount ] = useState(0);
	const [ name, setName ] = useState('');
	// useEffect(
	// 	() => {
	// 		document.title = `Clicked ${this.state.count} Times`;
	// 		return () => {
	// 			cleanup;
	// 		};
	// 	},
	// 	[ input ]
	// );
	useEffect(
		() => {
			console.log(' use Effect updating');

			document.title = `Clicked ${count} Times`;
		},
		[ count ]
	);
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
		</div>
	);
}

export default HookCounterOne;
