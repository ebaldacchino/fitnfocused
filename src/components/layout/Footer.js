import React from 'react';
import SocialLinks from '../../constants/social-links';
import FooterLinks from '../../constants/footer-links';
import useApp from '../../functions/useApp';
// import H2Divider from '../H2Divider';
const Footer = () => {
	const { isShown } = useApp();
	return (
		<footer>
			<section
				className={`no-padding-no-margin w100 grid-center slide-in ${
					isShown[isShown.length - 1] ? 'on-screen' : ''
				}`}>
				{/* <H2Divider title='get in touch' /> */}

				<SocialLinks />

				<FooterLinks />

				<p>
					Copyright © {new Date().getFullYear()} Raw Muscle | Website by{' '}
					<a
						href='https://ebaldacchino.netlify.app'
						target='_blank'
						rel='noreferrer'>
						EB Web Solutions
					</a>
				</p>
			</section>
		</footer>
	);
};
export default Footer;
