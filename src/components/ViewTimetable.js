import React from 'react';
import { Link } from 'gatsby';
import H2 from './headings/H2';
const ViewTimetable = ({ show }) => {
	return (
		<section className={`grid-center w100 slide-in ${show ? 'on-screen' : ''}`}>
			<H2 title='timetable' />
			<p className='text-center'>Open to see our complete timetable!</p>
			<Link to='/timetable'>
				<button className='btn'>view the timetable</button>
			</Link>
		</section>
	);
};

export default ViewTimetable;
