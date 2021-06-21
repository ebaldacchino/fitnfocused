import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TimerSection from './TimerSection';
import '../styles/components/promo-timer.css';

const query = graphql`
	{
		wpChallenge(featured: { eq: true }) {
			slug
			title
			startDate
		}
	}
`;

const PromoTimer = ({ backup, show }) => {
	const data = useStaticQuery(query);
	const { wpChallenge: challenge } = data; 
	if (!challenge) return null;
	const startDate = new Date(challenge.startDate);
	const now = new Date();
	return !challenge || startDate - now < 0 ? (
		backup
	) : (
		<TimerSection show={show} data={data} startDate={startDate} />
	);
};

export default PromoTimer;
