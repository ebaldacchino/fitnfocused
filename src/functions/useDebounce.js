import React from 'react';

const Function = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = React.useState(value);

	React.useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
export default Function;
