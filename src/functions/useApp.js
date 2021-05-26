import checkSlides from './checkSlideIn';
import useDebounce from './useDebounce';
const Function = () => {
	const {
		isShown,
		windowWidth,
		windowHeight,
		offset,
		checkSlideIn,
	} = checkSlides();

	const slugify = (x) => x.toLowerCase().split(' ').join('-');

	return {
		isShown,
		windowWidth,
		windowHeight,
		offset,
		checkSlideIn,
		slugify,
		useDebounce,
	};
};
export default Function;
