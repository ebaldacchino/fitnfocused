import React from 'react';
import Layout from '../components/layout';
import { FaPhone, FaMailBulk, FaInstagram } from 'react-icons/fa';
import useApp from '../functions/useApp';
import { graphql, useStaticQuery } from 'gatsby';
import parse from 'html-react-parser';
import '../styles/pages/trainers.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import HeroImage from '../components/HeroImage';

const query = graphql`
	{
		imageSharp(id: { eq: "70fed8fc-3fb1-5958-acfd-c92c1cfb9ac1" }) {
			gatsbyImageData
		}
		allWpTrainer {
			trainers: nodes {
				title
				featuredImage {
					node {
						localFile {
							image: childImageSharp {
								gatsbyImageData(
									placeholder: BLURRED
									formats: [AUTO, WEBP]
								)
							}
						}
					}
				}
				excerpt
				phone
				email
				instagram
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
					const {
						featuredImage,
						excerpt,
						phone,
						email,
						instagram,
						title,
					} = trainer;
					const image = getImage(
						featuredImage.node.localFile.image.gatsbyImageData
					);
					return (
						<article
							key={id}
							className={`slide-in ${isShown[id] ? 'on-screen' : ''}`}>
							<h3>{title}</h3>
							<GatsbyImage image={image} alt={title} />
							<ul className='social-links'>
								<li>
									<a href={`tel:${phone}`} target='_blank' rel='noreferrer'>
										<FaPhone className='icon' />
									</a>
								</li>
								<li>
									<a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
										<FaMailBulk className='icon' />
									</a>
								</li>
								<li>
									<a href={instagram} target='_blank' rel='noreferrer'>
										<FaInstagram className='icon' />
									</a>
								</li>
							</ul>
							{parse(excerpt)}
						</article>
					);
				})}
			</section>
		</Layout>
	);
};

export default Trainers;
