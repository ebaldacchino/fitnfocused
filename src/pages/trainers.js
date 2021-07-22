import React from 'react';
import Layout from '../components/layout';
import { FaPhone, FaInstagram } from 'react-icons/fa';
import useApp from '../functions/useApp';
import { graphql, useStaticQuery } from 'gatsby';
import parse from 'html-react-parser';
import '../styles/pages/trainers.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import HeroImage from '../components/HeroImage';

const query = graphql`
	{
		imageSharp(id: { eq: "f94e7609-de66-5f3b-bb14-9f7aea9af614" }) {
			gatsbyImageData(formats: [AUTO, WEBP, AVIF])
		}
		allWpTrainer {
			trainers: nodes {
				title
				featuredImage {
					node {
						localFile {
							image: childImageSharp {
								gatsbyImageData(formats: [AUTO, WEBP])
							}
						}
					}
				}
				excerpt
				phone 
				instagram
				position
			}
		}
	}
`;
const Trainers = () => {
	const { isShown } = useApp();
	const {
		imageSharp: { gatsbyImageData },
		allWpTrainer: { trainers },
	} = useStaticQuery(query);
	return (
		<Layout title='Meet The Trainers'>
			<HeroImage title='trainers' imageData={gatsbyImageData} />
			<section className='no-margin-top col3 trainers'>
				{trainers.map((trainer, id) => {
					const { featuredImage, excerpt, phone, instagram, title, position } =
						trainer;
					const image = getImage(
						featuredImage.node.localFile.image.gatsbyImageData
					);
					return (
						<article
							key={id}
							className={`slide-in ${isShown[id] ? 'on-screen' : ''}`}>
							<h3>{title}</h3>
							<GatsbyImage image={image} alt={title} />{' '}
							<ul className='social-links'>
								<li>
									<a
										href={`tel:${phone.replace(/\s/g, '')}`}
										target='_blank'
										rel='noreferrer'>
										<FaPhone className='icon' />
									</a>
								</li>
								<li>
									<a href={instagram} target='_blank' rel='noreferrer'>
										<FaInstagram className='icon' />
									</a>
								</li>
							</ul>
							{position && <h4>{position}</h4>}
							{parse(excerpt)}
						</article>
					);
				})}
			</section>
		</Layout>
	);
};

export default Trainers;
