import React from 'react';
import { Link } from 'gatsby';
import H2 from './headings/H2';
const GetSignup = ({  show, title, description, buttonText }) => {
	return (
		<section
			className={`grid-center slide-in ${show ? 'on-screen' : ''}`}>
			<H2 title={title} description={description} />
			<Link to='/signup'>
				<button className='btn'>{buttonText}</button>
			</Link>
		</section>
	);
};

export default GetSignup;
