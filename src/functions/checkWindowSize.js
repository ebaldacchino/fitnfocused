import { useState, useEffect } from 'react';
const Function = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);
	const [offset, setOffset] = useState(0);

	const handleWindowSize = () => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	};
	const checkOffset = () => setOffset(window.pageYOffset);
	useEffect(() => {
		handleWindowSize();
		window.addEventListener('resize', handleWindowSize);
		window.addEventListener('scroll', checkOffset);
		return () => {
			window.removeEventListener('resize', handleWindowSize);
			window.removeEventListener('scroll', checkOffset);
		};
	}, []);
	return { offset, windowWidth, windowHeight };
};
export default Function;
