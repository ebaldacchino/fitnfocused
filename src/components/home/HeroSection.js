import React from 'react';
// import heroVideoWebm from '../../images/fitnfocused-trailer-compressed.webm';
import heroVideoMp4 from '../../images/fitnfocused-trailer-compressed.mp4';
import Logo from '../../images/fitnfocused-transparent.svg';
import useApp from '../../functions/useApp';
import { FaPlay, FaPause } from 'react-icons/fa';
import Poster from '../../images/poster.jpg'
import '../../styles/components/hero-home.css';
// https://betterprogramming.pub/how-to-get-videos-to-work-in-safari-with-gatsby-and-service-workers-9e1f099249ac
const HeroSection = () => {
	const { offset } = useApp();
	const [isPlay, setIsPlay] = React.useState(true);

	React.useEffect(() => {
		const video = document.querySelector('video');
		isPlay ? video.play() : video.pause();
	}, [isPlay]);
	return (
		<section className='hero-container no-margin-top'>
			<video loop muted preload='metadata' crossOrigin='anonymous' playsInline poster={Poster} autoPlay>
				{/* <source src={heroVideoWebm} type='video/webm' /> */}
				<source src={heroVideoMp4} type='video/mp4' />
			</video>
			<article className='hero-overlay flex-center'>
				<img
					className={`hero-img ${offset === 0 ? 'show' : ''}`}
					src={Logo}
					alt="Fit 'n' Focused Logo"
				/>
				<button
					className='grid-center'
					onClick={() => setIsPlay(!isPlay)}
					onKeyPress={() => setIsPlay(!isPlay)}
					aria-label='Play/Pause Button'>
					{isPlay ? <FaPause /> : <FaPlay />}
				</button>
			</article>
		</section>
	);
};
export default HeroSection;
