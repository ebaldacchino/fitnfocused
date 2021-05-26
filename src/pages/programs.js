import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import TryNow from '../components/getSignup';
import { Link } from 'gatsby';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
import useQueries from '../functions/useQueries';
const query = graphql`
	{
		imageSharp(id: { eq: "70fed8fc-3fb1-5958-acfd-c92c1cfb9ac1" }) {
			gatsbyImageData
		}
	}
`;
const Programs = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);
	const { programs } = useQueries();
	const { isShown } = useApp();
	const description = `At Fit 'n' Focused, no two programs are the same. Our team of amazing coaches will motivate and inspire you to bring out the best in you. Come try any of our programs including${programs.map(
		(session, id) =>
			` ${id === programs.length - 1 ? 'and ' : ''}${session.title}`
	)}!`;
	return (
		<Layout title='Programs' description={description}>
			<HeroImage title='programs' imageData={gatsbyImageData} />
			<section
				className={`slide-in ${
					isShown[0] ? 'on-screen' : ''
				} no-margin-top w100 grid-center classes-section`}>
				{/* <p className='text-center'>
					Feel free to click on any of our programs below to find out more!
				</p> */}
				<ul className='col2'>
					{programs.map(({ title, slug }, id) => {
						return (
							<li key={id} className='grid-center'>
								<Link to={`/fitness-programs/${slug}`}>{title}</Link>
							</li>
						);
					})}
				</ul>
				{/* <Link to='/timetable'>
						<button className='btn'>see the timetable</button>
					</Link> */}
			</section>
			<TryNow
				show={isShown[1]}
				title='$28 for 28 days'
				description="Come try Geelong's best value offer today!"
				buttonText='try now'
			/>
		</Layout>
	);
};

export default Programs;
