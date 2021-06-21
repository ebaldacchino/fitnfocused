import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import HeroImage from '../components/HeroImage';
import ServiceCard from '../components/ServiceCard';
import useQueries from '../functions/useQueries';
const query = graphql`
	{
		imageSharp(id: { eq: "b196d662-22c4-5cd6-9ffa-67828c3b9cd9" }) {
			gatsbyImageData
		}
	}
`;

const Memberships = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);

	const { formattedMemberships } = useQueries();
	const memberships = formattedMemberships
	const { isShown } = useApp();
	return (
		<Layout title='Memberships'>
			<HeroImage title='memberships' imageData={gatsbyImageData} />
			<section className='col3'>
				{memberships.map((membership, index) => {
					return (
						<ServiceCard key={index} {...membership} show={isShown[index]} />
					);
				})}
			</section>
			<section
				className={` info grid-center slide-in ${
					isShown[memberships.length] ? 'on-screen' : ''
				}`}>
				<h2 className='glow'>ready to sign up?</h2>
				<p className='text-center'>
					Join today to take full advantage of Geelong's best value offer!
				</p>
				<Link to='/signup'>
					<button className='btn'>get a membership</button>
				</Link>
			</section>
		</Layout>
	);
};

export default Memberships;
