import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import H1 from './headings/H1';
import PromoBar from './PromoBar';
import '../styles/components/hero-image-container.css';
const HeroImage = ({ title, imageData, description, path, noPromoBar }) => {
	const image = getImage(imageData);
	const bgImage = convertToBgImage(image);
	return (
		<section className='no-margin-top w100'>
			<BackgroundImage {...bgImage}>
				<div className='hero-image-container'>
					<H1 className='hero-title' title={title} description={description} />
				</div>
			</BackgroundImage>
			{!noPromoBar && <PromoBar path={path} />}
		</section>
	);
};

export default HeroImage;
