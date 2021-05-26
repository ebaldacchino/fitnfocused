import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const AccordionItem = ({
	question,
	answer,
	isShown,
	handleAccordion,
	panelHeight,
}) => {
	return (
		<article className='grid-center'>
			<button
				className={`accordion ${isShown ? 'active' : ''}`}
				onClick={handleAccordion}>
				<span>{question}</span>
				<span>
					<FaAngleDown />
				</span>
			</button>
			<div
				className={`panel ${isShown ? 'active' : ''}`}
				style={{
					height: isShown ? panelHeight : 0,
				}}>
				<p>{answer}</p>
			</div>
		</article>
	);
};

export default AccordionItem;
