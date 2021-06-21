import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import HeroSection from '../components/home/HeroSection';
import Classes from '../components/ClassList';
import PromoBar from '../components/PromoBar';
import Memberships from '../components/home/Memberships';
import parse from 'html-react-parser';
import TryNow from '../components/getSignup';
import Instagram from '../components/home/Instagram';
import PromoTimer from '../components/PromoTimer';
import Testimonials from '../components/TestimonialsSection';
import H2 from '../components/headings/H2';
import useQueries from '../functions/useQueries';

const aboutText = `<p>At Fit N Focused we are more than just a gym, we are a community, a family! With us you will be surrounded by incredible people and trainers who inspire, encourage and uplift you to become the best version of yourself.</p>
<p>Within our 750m² space we offer group training classes that are renowned for their variety and contagious, exciting energy. With exercise modifications and progressions available, our classes are suitable for all fitness levels! Trust us when we say, it never gets easier, you just get fitter and more determined.</p>
<p>Our vision is to create a safe, fun place for you to dream big and gain the tools and passion to live a sustainable, healthy and fit lifestyle.</p>
<p>That is why we offer a variety of classes for all ages and fitness levels, including our Bootcamp Bandits for your children and our Mum, Dads N Little Ones for all our busy parents where your little ones come in for free with you</p>
<p>Check us out for yourself and get ready to transform your fitness and health whilst developing lifelong friends in the process.</p>
`;

const HomePage = ({ path }) => {
	const { isShown } = useApp();
	const [readMore, setReadMore] = React.useState(false);
	const aboutFull = aboutText;
	const aboutShortened = aboutFull.split(' ').slice(0, 50).join(' ') + '...';
	const { challenge } = useQueries();
	const adjust = (x) => (challenge ? x : x - 1);
	return (
		<Layout path={path} isHome>
			<HeroSection />
			<section className='w100 no-margin-top'>
				<PromoBar isHomePage />
			</section>
			{challenge && (
				<PromoTimer
					show={isShown[0]}
					backup={
						<>
							<TryNow
								show={isShown[0]}
								title='$28 for 28 days'
								description="Come try Geelong's best value offer today!"
								buttonText='try now'
							/>
						</>
					}
				/>
			)}

			<section
				className={`grid-center info slide-in ${
					isShown[adjust(1)] ? 'on-screen' : ''
				}`}>
				<H2 title='about' />
				<article>{readMore ? parse(aboutFull) : parse(aboutShortened)}</article>
				<button className='btn' onClick={() => setReadMore(!readMore)}>
					read {readMore ? 'less' : 'more'}
				</button>
			</section>
			<Classes show={isShown[adjust(2)]} showTitle />
			<Memberships show={isShown.slice(adjust(3), adjust(8))} />

			<Instagram show={isShown.slice(adjust(8))} />
			<Testimonials show={isShown[adjust(15)]} />
		</Layout>
	);
};

export default HomePage;
