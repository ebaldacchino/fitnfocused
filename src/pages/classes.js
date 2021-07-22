import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import TryNow from '../components/getSignup';
import { graphql, useStaticQuery } from 'gatsby';
import ClassList from '../components/ClassList';
import ViewTimetable from '../components/ViewTimetable';
import HeroImage from '../components/HeroImage';
import useQueries from '../functions/useQueries';

const query = graphql`
	{
		imageSharp(id: { eq: "f369577d-956c-5b7f-98f0-fc4873cdf708" }) {
			gatsbyImageData(formats: [AUTO, WEBP, AVIF])
		}
	}
`;
const Classes = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);
	const { classes } = useQueries();
	const { isShown } = useApp();
	const description = `At Fit 'n' Focused, no two classes are the same. Our team of amazing coaches will motivate and inspire you to bring out the best in you. Come try any of our classes including${classes.map(
		(session, id) =>
			` ${id === classes.length - 1 ? 'and ' : ''}${session.title}`
	)}!`;

	return (
		<Layout title='Classes' description={description}>
			<HeroImage title='classes' imageData={gatsbyImageData} />
			<ClassList show={isShown[0]} classPage />
			<ViewTimetable show={isShown[1]} />
			<TryNow
				show={isShown[2]}
				title='$28 for 28 days'
				description="Come try Geelong's best value offer today!"
				buttonText='try now'
			/>
		</Layout>
	);
};

export default Classes;
