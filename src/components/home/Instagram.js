import React from 'react';
import H2 from '../headings/H2';
import '../../styles/components/instagram.css';
import useQueries from '../../functions/useQueries'; 
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Instagram = ({ show }) => {
	const { formattedInstagramPosts: posts } = useQueries();
	if (posts.length === 0) {
		return null;
	}
	return (
		<section className='instagram-section'>
			<H2
				styleClass={`slide-in ${show[0] ? 'on-screen' : ''}`}
				title='instagram'
				description={
					<>
						Come join us on the journey at{' '}
						<a
							href='https://www.instagram.com/fitnfocusedpt'
							target='_blank'
							rel='noreferrer'>
							@fitnfocused
						</a>
						!
					</>
				}
			/>
			<article className='grid-center'>
				{posts.slice(0, 6).map((post, index) => {
					const { id, gatsbyImageData, url, caption } = post;

					const image = getImage(gatsbyImageData);
					return (
						<a
							href={url}
							target='_blank'
							rel='noreferrer'
							key={id}
							className={`slide-in ${show[index + 1] ? 'on-screen' : ''}`}>
							<GatsbyImage image={image} alt={caption} />
						</a>
					);
				})}
			</article>
		</section>
	);
};

export default Instagram;
