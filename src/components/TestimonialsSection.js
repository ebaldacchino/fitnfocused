import React, { useState, useEffect } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import '../styles/components/testimonials.css';
import {
	FaQuoteLeft,
	FaQuoteRight,
	FaChevronLeft,
	FaChevronRight,
} from 'react-icons/fa';
import useApp from '../functions/useApp';
import Reviews from '../constants/reviews';
import H2 from './headings/H2';

// const query = graphql`
// 	{
// 		allGoogleReview {
// 			nodes {
// 				body
// 				rating
// 				source
// 			}
// 		}
// 	}
// `;

const Testimonials = ({ show }) => {
	// const {
	// 	allGoogleReview: { nodes: reviews },
	// } = useStaticQuery(query);

	const { windowWidth } = useApp();

	const filteredReviews = Reviews.filter((review) => review.rating === 5);
	const [index, setIndex] = useState(0);
	const [slideHeight, setSlideHeight] = useState('auto');
	const [pageX, setPageX] = useState(0);
	const [isDown, setIsDown] = useState(false);

	const numberOfSlides = filteredReviews.length;

	const prevSlide = () =>
		setIndex(index === 0 ? numberOfSlides - 1 : index - 1);
	const nextSlide = () =>
		setIndex(index === numberOfSlides - 1 ? 0 : index + 1);

	const handleScrollLeft = React.useCallback(() => {
		const slider = document.querySelector('.slider');
		const sliderWidth = slider.getBoundingClientRect().width;
		slider.scroll({
			left: index * sliderWidth,
			behavior: 'smooth',
		});
	}, [index]);

	const pointerDown = (e) => {
		setIsDown(true);
		setPageX(e.pageX);
	};
	const pointerUp = (e) => {
		if (!isDown) return;
		const movement = e.pageX - pageX;
		movement > 15 ? prevSlide() : movement < -15 && nextSlide();
		setIsDown(false);
	};

	const getSlideHeight = () => {
		setSlideHeight('auto');

		setTimeout(() => {
			const boxHeight = Array.from(
				document.querySelectorAll('.quote-box')
			).reduce((highest, box) => {
				const thisBoxesHeight = box.scrollHeight;
				return highest > thisBoxesHeight ? highest : thisBoxesHeight;
			}, 0);
			setSlideHeight(boxHeight);
		}, 100);
	};
	useEffect(() => {
		getSlideHeight();
	}, [windowWidth]);

	useEffect(() => {
		const slider = document.querySelector('.slider');
		if (!slider) return;
		handleScrollLeft();
	}, [index, windowWidth, handleScrollLeft]);

	return (
		<>
			<section
				className={`info testimonials-section slide-in ${
					show ? 'on-screen' : ''
				}`}>
				<H2 title='Testimonials' />
				<article className='flex-center'>
					<button
						className='arrow-container left'
						onClick={prevSlide}
						onKeyPress={prevSlide}>
						<FaChevronLeft className='icon' />
					</button>
					<div
						className='slider'
						onPointerDown={pointerDown}
						onPointerUp={pointerUp}>
						{filteredReviews.map(({ body, source }, id) => (
							<div
								key={id}
								className={`review-container ${
									index === id ? 'show' : 'hide'
								}`}>
								<div
									className='quote-box'
									style={{
										height: slideHeight,
									}}>
									<FaQuoteLeft className='quotes left' />
									<p>{body}</p>
									<FaQuoteRight className='quotes right' />
								</div>
								<div className='quote-box-arrow'></div>

								<p>
									{source
										.split(' ')
										.map(
											(name) => name.slice(0, 1).toUpperCase() + name.slice(1)
										)
										.join(' ')}
								</p>
							</div>
						))}
					</div>
					<button
						className='arrow-container right'
						onClick={nextSlide}
						onKeyPress={nextSlide}>
						<FaChevronRight className='icon' />
					</button>
				</article>
			</section>
		</>
	);
};

export default Testimonials;
