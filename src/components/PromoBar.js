import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import '../styles/components/promo-bar.css';
import useQueries from '../functions/useQueries';
// import TryNow from './getSignup';

const Validator = ({ path }) => {
	const { challenge } = useQueries();
	if (!challenge)
		return (
			<Link
				to={'/signup'}
				className='no-margin-top flex-center promo-container'>
				<h2 className='glow no-padding-no-margin'>$28 for 28 days</h2>
				<div className='flex-center'>
					<span>
						try Geelong's best offer today
					</span>
					<FaAngleDoubleRight />
				</div>
			</Link>
		);
	const startDate = new Date(challenge.startDate);
	const now = new Date();
	return startDate - now < 0 ? null : <PromoBar {...challenge} path={path} />;
};

const PromoBar = ({ slug, title, path }) => {
	const isAdvertisedChallenge = path === `/fitness-challenges/${slug}`;
	const linkPath = isAdvertisedChallenge
		? '/signup'
		: `/fitness-challenges/${slug}`;
	return (
		<Link to={linkPath} className='no-margin-top flex-center promo-container'>
			<h2 className='glow no-padding-no-margin'>take the challenge</h2>
			<div className='flex-center'>
				<span>Our next {title} is on now</span>
				<FaAngleDoubleRight />
			</div>
		</Link>
	);
};

export default Validator;
