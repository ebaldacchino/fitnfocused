import { motion } from 'framer-motion';
import React from 'react';
import { links as NavLinks } from '../../constants/nav-links';
import { links as FooterLinks } from '../../constants/footer-links';
import { useLocation } from '@reach/router';
const Main = ({ children }) => {
	const links = [
		...NavLinks.map(({ link }) => link),
		...FooterLinks.map(({ link }) => link),
	];

	const { pathname, state } = useLocation();

	const prevIndex = state && links.indexOf(state.referrer);

	const currentIndex = links.indexOf(pathname);

	const fromLeft =
		(prevIndex === -1 && currentIndex !== -1) ||
		(currentIndex !== -1 && prevIndex > currentIndex);

	return (
		<motion.main
			initial={{ opacity: 0, x: fromLeft ? '-100vw' : '100vw' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0 }}
			transition={{
				type: 'spring',
				mass: 0.35,
				stiffness: 75,
				duration: 0.1,
			}}>
			{children}
		</motion.main>
	);
};

export default Main;
