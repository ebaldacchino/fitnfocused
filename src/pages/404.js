import React from 'react';
import Layout from '../components/layout';
// import H1 from '../components/headings/H1';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	{
		imageSharp(id: { eq: "70fed8fc-3fb1-5958-acfd-c92c1cfb9ac1" }) {
			gatsbyImageData
		}
	}
`;
const Error = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);

	return (
		<Layout title='Page Not Found'>
			<HeroImage
				title='page not found'
				description="Oops!!! The link you clicked on doesn't appear to exist. Please use the links above to find what you seek!"
				imageData={gatsbyImageData}
			/>
			{/* <H1
				title='page not found'
				description="Oops!!! The link you clicked on doesn't appear to exist. Please use the links above to find what you seek!"
			/> */}
		</Layout>
	);
};

export default Error;
