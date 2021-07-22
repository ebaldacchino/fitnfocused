import React from 'react';
import Layout from '../components/layout';
import IframeResizer from 'iframe-resizer-react';
import '../styles/components/iframes.css';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
	{
		imageSharp(id: { eq: "e8e20fec-b4a5-567e-a00f-0b708f8a71e8" }) {
			gatsbyImageData(formats: [AUTO, WEBP, AVIF])
		}
	}
`;

const Signup = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);
	return (
		<Layout title='Signup Today'>
			<HeroImage title='signup today' imageData={gatsbyImageData} noPromoBar />
			<section className='w100 grid-center'>
				<IframeResizer
					src='https://fitnfocused.gymmasteronline.com/portal/signup?logo=0'
					style={{ width: '1px', minWidth: '100%' }}
					id='iFrameResizer0'
					className='gmiframe'
					title='Calendar'
				/>
			</section>
		</Layout>
	);
};

export default Signup;
