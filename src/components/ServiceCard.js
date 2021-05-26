import React from 'react';
import { Link } from 'gatsby'; 
import '../styles/components/service-card.css';
const ServiceCard = (props) => {
	const {
		title,
		price,
		paymentFrequency,
		sellingPoint1,
		sellingPoint2,
		sellingPoint3,
		sellingPoint4,
		sellingPoint5,
		show,
	} = props;
	const sellingPoints = [
		sellingPoint1,
		sellingPoint2,
		sellingPoint3,
		sellingPoint4,
		sellingPoint5,
	];
	return (
		<div
			className={`service-card grid-center slide-in ${
				show ? 'on-screen' : ''
			}`}>
			<div className='grid-center'>
				<span className='service-title'>{title}</span>
				<div className='price-container'>
					<span className='service-price'>${price}</span>
					<h5>{paymentFrequency}</h5>
				</div>
				<div className='selling-points'>
					{sellingPoints.map((point, index) =>
						point ? <p key={index}>{point}</p> : null
					)}
				</div>
				<Link to='/signup' className='w100 grid-center'>
					<button className='service-btn btn'>signup today</button>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard;
