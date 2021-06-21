import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import '../styles/components/promo-bar.css';
import useQueries from '../functions/useQueries';

const Validator = ({ isHomePage, path }) => {
	const { challenge } = useQueries();
	if (!challenge) return null;
	const startDate = new Date(challenge.startDate);
	const now = new Date();
	return startDate - now < 0 ? null : (
		<PromoBar {...challenge} isHomePage={isHomePage} path={path} />
	);
};

const PromoBar = ({ slug, title, isHomePage, path }) => {
	const { geoOverlayData } = useQueries();

	const image = getImage(geoOverlayData);
	const bgImage = convertToBgImage(image);

	const isAdvertisedChallenge = path === `/fitness-challenges/${slug}`;

	const linkPath = isAdvertisedChallenge
		? '/signup'
		: `/fitness-challenges/${slug}`;
	return (
		<>
			<BackgroundImage {...bgImage}>
				<Link
					to={linkPath}
					className='no-margin-top flex-center promo-container'>
					<h2 className='glow no-padding-no-margin'>take the challenge</h2>
					<div className='flex-center'>
						<span>Our next {title} is on now</span>
						<FaAngleDoubleRight />
					</div>
				</Link>
			</BackgroundImage>
		</>
	);
};

export default Validator;
