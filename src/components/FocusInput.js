import React, { useEffect, useRef } from 'react';

function FocusInput() {
	const inputRef = useRef(0);
	useEffect(() => {
		//Focus the input element
		inputRef.current.focus();
		return () => {
			return null;
		};
	}, []);
	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	);
}

export default FocusInput;
