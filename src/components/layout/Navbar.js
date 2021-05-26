import React from 'react';
import Links from '../../constants/nav-links';
import SocialLinks from '../../constants/social-links';
import { Link } from 'gatsby';
import Logo from '../../images/fitnfocused-transparent.svg';
import useApp from '../../functions/useApp';
const Navbar = ({ isOpen, toggle, isHome }) => {
	const { offset } = useApp();

	return (
		<nav className='navbar'>
			<Link to='/' className={`logo ${offset !== 0 || !isHome ? '' : 'hide'}`}>
				<img src={Logo} alt="Fit 'n' Focused Logo" />{' '}
			</Link>
			<article className='menu-items'>
				<Links />
				<SocialLinks />
			</article>
			<button
				id='menu-icon'
				aria-label='Menu Icon'
				onClick={toggle}
				className={isOpen ? 'change-menu-icon' : ''}>
				<div className='menu-icon-bar1'></div>
				<div className='menu-icon-bar2'></div>
				<div className='menu-icon-bar3'></div>
			</button>
		</nav>
	);
};
export default Navbar;
