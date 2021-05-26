import React from 'react';
import Layout from '../components/layout';
import IframeResizer from 'iframe-resizer-react';
import '../styles/components/iframes.css';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
	{
		imageSharp(id: { eq: "70fed8fc-3fb1-5958-acfd-c92c1cfb9ac1" }) {
			gatsbyImageData
		}
	}
`;

const Signup = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);
	return (
		<Layout title='Signup Today'>
			<HeroImage title='signup today' imageData={gatsbyImageData} />
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
