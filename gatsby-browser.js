import React from 'react';
import { AnimatePresence } from 'framer-motion';

import './src/styles/main.css';
import './src/styles/navbar.css';
import './src/styles/footer.css';
import './src/styles/scroll-top.css';

export const wrapPageElement = ({ element }) => (
	<AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
export const onRouteUpdate = ({ location, prevLocation }) => {
	if (location && location.state)
		location.state.referrer = prevLocation ? prevLocation.pathname : null;
};
