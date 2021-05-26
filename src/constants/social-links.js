import React from 'react';
import { FaFacebookF, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa';
const links = [
	{
		icon: <FaFacebookF className='icon' />,
		link: 'https://www.facebook.com/FitNFocusedPersonalTraining',
		label: "Fit 'n' Focused Facebook Icon",
	},
	{
		icon: <FaInstagram className='icon' />,
		link: 'https://www.instagram.com/fitnfocusedpt',
		label: "Fit 'n' Focused Instagram Icon",
	},
	{
		icon: <FaMailBulk className='icon' />,
		link: 'mailto: nikita@fitnfocused.com.au',
		label: 'Mail Icon',
	},
	{
		icon: <FaPhone className='icon' />,
		link: 'tel: 0408411801',
		label: 'Phone Icon',
	},
];
const SocialLinks = () => (
	<ul className='social-links'>
		{links.map(({ link, icon, label }, id) => (
			<li key={id}>
				<a href={link} aria-label={label}>
					{icon}
				</a>
			</li>
		))}
	</ul>
);
export default SocialLinks