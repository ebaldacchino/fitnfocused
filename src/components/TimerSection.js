import React from 'react';
import H2 from './headings/H2';
import { Link } from 'gatsby';
import '../styles/components/promo-timer.css';
const TimerSection = ({ startDate, show }) => {
	const [timeLeft, setTimeLeft] = React.useState(startDate - Date.now());
	
	const format = (e) => (e < 10 ? `0${e}` : e);
	const [timerData, setTimerData] = React.useState({
		day: 0,
		hour: 0,
		min: 0,
		sec: 0,
	});

	const oneSec = 1000;
	const oneMin = oneSec * 60;
	const oneHour = oneMin * 60;
	const oneDay = oneHour * 24;

	const handleTimerData = React.useCallback(() => {
		const timeObj = {
			day: format(Math.floor(timeLeft / oneDay)),
			hour: format(Math.floor((timeLeft % oneDay) / oneHour)),
			min: format(Math.floor((timeLeft % oneHour) / oneMin)),
			sec: format(Math.floor((timeLeft % oneMin) / oneSec)),
		};

		setTimerData(timeObj);
	}, [oneHour, oneDay, oneMin, timeLeft]);

	const handleInterval = React.useCallback(() => {
		const interval = setInterval(() => {
			setTimeLeft(timeLeft - oneSec);
		}, oneSec);
		return () => clearInterval(interval);
	}, [timeLeft]);
	
	React.useEffect(handleInterval, [handleInterval]);
	React.useEffect(handleTimerData, [timeLeft, handleTimerData]);
	return (
		<section className={`grid-center slide-in ${show ? 'on-screen' : ''}`}>
			<H2 title='starting in' />
			<span className='time'>
				{timerData.day}d : {timerData.hour}h : {timerData.min}m :{' '}
				{timerData.sec}s
			</span>
			<Link to='/signup'>
				<button className='btn'>start here</button>
			</Link>
		</section>
	);
};

export default TimerSection;
