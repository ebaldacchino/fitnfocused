import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Seo from './Seo';
import Sidebar from './Sidebar';
import useApp from '../../functions/useApp';
import { FaArrowCircleUp } from 'react-icons/fa';
import IncompatibleBrowser from './IncompatibleBrowser';
// import Main from './Main';
import SubmittedForm from '../contact/SubmittedForm';

const Layout = ({
	children,
	title,
	description,
	submittedFormFunction,
	submittedFormIsVisible,
	submittedForm,
	isHome,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const { offset, windowHeight } = useApp();
	const [isIE, setIsIE] = React.useState(false);
	React.useEffect(() => {
		const BlockBrowserAlert = localStorage.getItem('BlockBrowserAlert');
		if (window && !BlockBrowserAlert) {
			const detectIe =
				window.navigator.userAgent.indexOf('MSIE') !== -1 ||
				window.navigator.appVersion.indexOf('Trident/') > -1;
			setIsIE(detectIe);
			!detectIe && localStorage.setItem('BlockBrowserAlert', true); // change to test
		} else {
			setIsIE(false); // change to test
		}
	}, []);

	const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
	return (
		<>
			<Seo title={title} description={description} />
			{isIE ? ( // change to test
				<IncompatibleBrowser setIsIE={setIsIE} />
			) : (
				<>
					<Navbar toggle={toggle} isOpen={isOpen} isHome={isHome} />
					<Sidebar toggle={toggle} isOpen={isOpen} />
					<main>{children}</main>
					{offset > windowHeight / 2 && (
						<FaArrowCircleUp className='scrollTop' onClick={scrollTop} />
					)}
					{submittedForm && (
						<SubmittedForm
							isVisible={submittedFormIsVisible}
							closeSection={submittedFormFunction}
						/>
					)}

					<Footer />
				</>
			)}
		</>
	);
};
export default Layout;
