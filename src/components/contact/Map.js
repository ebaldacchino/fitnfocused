import React from 'react';
import '../../styles/components/iframes.css';
const Map = ({ show }) => (
	<iframe
		className={`slide-in map ${show ? 'on-screen' : ''}`}
		src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.5986969422693!2d144.36562341498453!3d-38.17276507968895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4148ad54ba74d%3A0x14cb928b1a5a5110!2sFit%20N%20Focused%20Personal%20Training!5e0!3m2!1sen!2sau!4v1614067208876!5m2!1sen!2sau'
		width='100%'
		height='100%'
		allowFullScreen
		title="Fit 'n' Focused Gym Location"
		loading='lazy'
	/>
);
export default Map;
