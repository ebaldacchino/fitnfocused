import React from 'react';

const H2Divider = ({ styleClass, title, description }) => {
	return (
		<div className={`h2container ${styleClass || ''}`}>
			<h1 className='hero-title no-padding-no-margin'>{title}</h1>
			<div
				className='grid-center'
				style={{
					padding: '1rem 0 0.8rem 0',
				}}>
				<div
					style={{
						height: '0.125rem',
						width: '3rem',
						backgroundColor: 'var(--theme-color)',
					}}></div>
			</div>
			{description && <p className='text-center'>{description}</p>}
		</div>
	);
};

export default H2Divider;
