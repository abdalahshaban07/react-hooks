import { useState } from 'react';

function UseInput(initialVtate) {
	const [ value, setValue ] = useState(initialVtate);

	const reset = () => {
		setValue(initialVtate);
	};

	const bind = {
		value,
		onChange: (e) => {
			setValue(e.target.value);
		}
	};

	console.log({ value, bind });
	return [ value, bind, reset ];
}

export default UseInput;
