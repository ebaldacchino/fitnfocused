import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TimerSection from './TimerSection';
import '../styles/components/promo-timer.css';

const query = graphql`
	{
		wpProgram(isChallenge: { eq: true }) {
			slug
			title
			startDate
		}
	}
`;

const PromoTimer = ({ backup, show }) => {
	const data = useStaticQuery(query);
	const startDate = new Date(data.wpProgram.startDate);
	const now = new Date();
	return !data.wpProgram || startDate - now < 0 ? (
		backup
	) : (
		<TimerSection show={show} data={data} startDate={startDate} />
	);
};

export default PromoTimer;
