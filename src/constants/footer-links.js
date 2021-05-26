import React from 'react';
import { Link } from 'gatsby';
export const links = [
	{
		text: 'signup',
		link: '/signup',
	},
	{
		text: 'timetable',
		link: '/timetable',
	},
	{
		text: 'faq',
		link: '/faq',
	},
	// {
	// 	text: 'testimonials',
	// 	link: '/testimonials',
	// },
];

const FooterLinks = ({ styleClass }) => (
	<div className='menu-items'>
		<nav 
			className={`page-links ${styleClass ? styleClass : ''}`}>
			{links.map(({ text, link, url }, id) => {
				return link ? (
					<Link activeClassName='active-link' key={id} to={link}>
						{text}
					</Link>
				) : (
					<a key={id} href={url} target='_blank' rel='noreferrer'>
						{text}
					</a>
				);
			})}
		</nav>
	</div>
);
export default FooterLinks;
