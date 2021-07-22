import React from 'react';
import Layout from '../components/layout';
// import H1 from '../components/headings/H1';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
	{
		imageSharp(id: { eq: "e8e20fec-b4a5-567e-a00f-0b708f8a71e8" }) {
			gatsbyImageData(formats: [AUTO, WEBP, AVIF])
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
