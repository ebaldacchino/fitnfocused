import React from 'react';
import { Link } from 'gatsby';
export const links = [
	{
		text: 'home',
		link: '/',
	},
	{
		text: 'classes',
		link: '/classes',
	},
	{
		text: 'programs',
		link: '/programs',
	},
	{
		text: 'memberships',
		link: '/memberships',
	},
	{
		text: 'trainers',
		link: '/trainers',
	},
	{
		text: 'contact us',
		link: '/contact',
	},
];

const NavLinks = ({ styleClass }) => (
	<nav className={`page-links ${styleClass ? styleClass : ''}`}>
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
);

export default NavLinks