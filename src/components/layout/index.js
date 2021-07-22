import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Seo from './Seo';
import Sidebar from './Sidebar';
import useApp from '../../functions/useApp';
import { FaArrowCircleUp } from 'react-icons/fa';
// import Main from './Main';
import SubmittedForm from '../contact/SubmittedForm';
import Main from './Main';

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

	const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
	return (
		<>
			<Seo title={title} description={description} />
			<Navbar toggle={toggle} isOpen={isOpen} isHome={isHome} />
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<Main>{children}</Main>
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
	);
};
export default Layout;
