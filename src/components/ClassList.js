import React from 'react';
import { Link } from 'gatsby';
import '../styles/components/class-lists.css';
import H2 from './headings/H2';
import useQueries from '../functions/useQueries';
const ClassList = ({ show, path, classPage }) => {
	const { classes } = useQueries();
	return (
		<>
			<section
				className={`slide-in ${show ? 'on-screen' : ''} ${
					classPage ? 'no-margin-top' : ''
				} w100 grid-center classes-section`}>
				{!classPage && (
					<H2
						title='classes'
						description='Feel free to click on any of our group fitness classes below to find out more!'
					/>
				)}
				{/* {path === '/classes/' && (
					<p className='text-center'>
						Feel free to click on any of our group fitness classes below to find
						out more!
					</p>
				)} */}

				<ul className='col2'>
					{classes.map(({ title, slug }, id) => {
						return (
							<li key={id} className='grid-center'>
								<Link to={`/fitness-classes/${slug}`}>{title}</Link>
							</li>
						);
					})}
				</ul>
				{!['/classes/', '/timetable/'].find((string) => string === path) && (
					<Link to='/timetable'>
						<button className='btn'>see the timetable</button>
					</Link>
				)}
			</section>
		</>
	);
};
export default ClassList;
