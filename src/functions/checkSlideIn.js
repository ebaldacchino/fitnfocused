import { useState, useEffect } from 'react';
import checkWindowSize from './checkWindowSize';

let defaultValues = [];
for (let i = 0; i < 50; i++) {
	defaultValues.push(true);
}

const Function = () => {
	const [isShown, setIsShown] = useState([]);
	const { offset, windowWidth, windowHeight } = checkWindowSize();
	const checkSlideIn = (e) => {
		const sliderItems = Array.from(document.querySelectorAll('.slide-in'));
		const result = sliderItems.map((item) => {
			const itemBottom = item.offsetTop + item.clientHeight;
			const midwayPoint = itemBottom - item.clientHeight * 0.75;
			const slideInAt = window.scrollY + window.innerHeight;
			const isShown = slideInAt > midwayPoint;

			return isShown;
		});
		setIsShown(result);
	};
	useEffect(checkSlideIn, [windowWidth, windowHeight]);
	useEffect(() => {
		window.addEventListener('scroll', checkSlideIn);
		return () => {
			window.removeEventListener('scroll', checkSlideIn);
		};
	}, []);
	return { offset, isShown, windowWidth, windowHeight, checkSlideIn };
};

export default Function;
