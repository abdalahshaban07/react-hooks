import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetchingOne() {
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState('');
	const [ post, setPost ] = useState({});

	useEffect(() => {
		axios
			.get(`http://jsonplaceholder.typicode.com/posts/1`)
			.then((res) => {
				setLoading(false);
				setPost(res.data);
				setError('');
			})
			.catch((err) => {
				setLoading(false);
				setPost({});
				setError('Someting Went Wrong', err);
			});
		return () => {
			return null;
		};
	}, []);

	return (
		<div>
			{loading ? 'loading' : post.title}
			{error ? error : null}
		</div>
	);
}

export default DataFetchingOne;
