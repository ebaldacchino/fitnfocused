import React from 'react';
import H2 from '../headings/H2';
import EdgeLogo from '../../images/edge.428d5c3d.svg';
import ChromeLogo from '../../images/chrome.373b2bd5.svg';
import FirefoxLogo from '../../images/firefox.371d3b88.svg';
import OperaLogo from '../../images/opera.svg';
import '../../styles/components/incompatible-browser.css';
const IncompatibleBrowser = ({ setIsIE }) => {
	return (
		<main className='no-margin-top recommended-browsers'>
			<H2
				className='glow'
				title='update your browser'
				description='The browser you’re using is no longer supported. Update to a newer browser for the best experience.'
			/>
			<section className='w100 recommended-browsers grid-center'>
				{[
					{
						title: 'Edge',
						logo: EdgeLogo,
						url: 'https://www.microsoft.com/en-us/edge',
					},
					{
						title: 'Chrome',
						logo: ChromeLogo,
						url: 'https://www.google.com/chrome/',
					},
					{
						title: 'Firefox',
						logo: FirefoxLogo,
						url: 'https://www.mozilla.org/en-US/firefox/',
					},
					{
						title: 'Opera',
						logo: OperaLogo,
						url: 'https://www.opera.com/',
					},
				].map((browser, index) => {
					return (
						<a href={browser.url} key={index} target='_blank' rel='noreferrer'>
							<img src={browser.logo} alt={`${browser.title} Logo`} />
							<h3>{browser.title}</h3>
						</a>
					);
				})}
			</section>
			<button
				className='btn'
				onClick={() => {
					localStorage.setItem('BlockBrowserAlert', true);
					setIsIE(false);// change to test
				}}>
				proceed anyway
			</button>
		</main>
	);
};

export default IncompatibleBrowser;
