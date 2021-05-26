import React from 'react';
import Links from '../../constants/nav-links';
import SocialLinks from '../../constants/social-links';
const Sidebar = ({ isOpen, toggle }) => {
	return (
		<aside
			onClick={toggle}
			// onKeyPress={toggle}
			role='presentation'
			className={isOpen ? 'open' : ''}>
			<article>
				<Links />
				<SocialLinks />
			</article>
		</aside>
	);
};
export default Sidebar;
