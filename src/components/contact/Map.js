import React from 'react';
import '../../styles/components/iframes.css';

// const NO_API =
// 	'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12546.394784272561!2d144.3678121!3d-38.1727651!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1625483518480!5m2!1sen!2sau';

const API_KEY = 'AIzaSyCRZEHSbmymZzDTsM3yxUuTXhgJFrS7S9Q';
const Q = 'place_id:ChIJTadL1YoU1GoREFFaGouSyxQ';
const API_SRC = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${Q}`;

const Map = ({ show }) => (
	<iframe
		className={`slide-in map ${show ? 'on-screen' : ''}`}
		src={API_SRC}
		width='100%'
		height='100%'
		allowFullScreen
		title="Fit 'n' Focused Gym Location"
		loading='lazy'
	/>
);
export default Map;
