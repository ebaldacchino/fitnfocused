import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import '../styles/components/promo-bar.css';
// https://fontawesome.com/icons?d=gallery&p=2&q=right&m=free

const query = graphql`
	{
		imageSharp(id: { eq: "100fba6a-685d-5375-a4c6-d418a3023379" }) {
			gatsbyImageData
		}
		wpProgram(isChallenge: { eq: true }) {
			slug
			title
			startDate
		}
	}
`;

const Validator = () => {
	const data = useStaticQuery(query);
	const startDate = new Date(data.wpProgram.startDate);
	const now = new Date();
	return !data.wpProgram || startDate - now < 0 ? null : (
		<PromoBar data={data} />
	);
};

const PromoBar = ({ data }) => {
	const {
		imageSharp: { gatsbyImageData },
		wpProgram: { slug, title },
	} = data;

	const image = getImage(gatsbyImageData);
	const bgImage = convertToBgImage(image);
	return (
		<BackgroundImage {...bgImage}>
			<Link
				to={`/fitness-programs/${slug}`}
				className='no-margin-top flex-center promo-container'>
				<h2 className='glow no-padding-no-margin'>take the challenge</h2>
				<div className='flex-center'>
					<span>Our next {title} is on now</span>
					<FaAngleDoubleRight />
				</div>
			</Link>
		</BackgroundImage>
	);
};

export default Validator;
