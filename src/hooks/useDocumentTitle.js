import { useEffect } from 'react';

function useDocumentTitle(count) {
	useEffect(
		() => {
			document.title = `Count ${count}`;
			return () => {
				return null;
			};
		},
		[ count ]
	);
}

export default useDocumentTitle;
