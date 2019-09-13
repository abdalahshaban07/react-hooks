import React, { useState } from 'react';
import UseInput from '../hooks/UseInput';

function UserForm() {
	// const [ firstName, setFirstName ] = useState('');
	// const [ lastName, setLastName ] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};
	const [ firstName, bindFirstName, resetFirstName ] = UseInput('');
	const [ lastName, bindLastName, resetLastName ] = UseInput('');

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					<input {...bindFirstName} type="text" />
				</div>
				<div>
					<label>Last Name</label>
					<input {...bindLastName} type="text" />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default UserForm;
