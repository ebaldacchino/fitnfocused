import React from 'react';
import { Link } from 'gatsby';
import H2 from '../headings/H2';
import '../../styles/components/service-card.css';
import ServiceCard from '../ServiceCard';
import useQueries from '../../functions/useQueries';
const MembershipSection = ({ show }) => {
	const { formattedMemberships } = useQueries();
	return (
		<section className='grid-center w100'>
			<H2
				title='memberships'
				styleClass={`slide-in ${show[0] ? 'on-screen' : ''}`}
			/>
			<article
				className='col3'
				style={{
					margin: '1.25rem 0',
				}}>
				{formattedMemberships 
					.slice(0, 3)
					.map((membership, index) => {
						return (
							<ServiceCard {...membership} show={show[index + 1]} key={index} />
						);
					})}
			</article>
			<Link to='/memberships'>
				<button className={`btn slide-in ${show[4] ? 'on-screen' : ''}`}>
					more membership info
				</button>
			</Link>
		</section>
	);
};
export default MembershipSection;
