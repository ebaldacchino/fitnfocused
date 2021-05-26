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

const aboutText = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor culpa, autem, quae earum non, veritatis modi amet omnis nemo deserunt laborum voluptates animi voluptatibus cumque itaque illo. Natus qui fugiat neque eligendi unde sapiente aut nesciunt tempora excepturi rerum.</p>
 
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, possimus totam. Odit commodi ab accusamus minima dolore, impedit est magni eum architecto quas suscipit repellendus laborum placeat consequatur qui ut!</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad animi repellat eaque culpa asperiores, laborum assumenda id. Distinctio iusto temporibus porro autem praesentium facere laboriosam quae ad accusantium natus eveniet architecto non asperiores, numquam cum tempora nostrum fugiat assumenda.</p>`;

const HomePage = ({ path }) => {
	const { isShown } = useApp();
	const [readMore, setReadMore] = React.useState(false);
	const aboutFull = aboutText;
	const aboutShortened = aboutFull.split(' ').slice(0, 50).join(' ') + '...';
	return (
		<Layout path={path} isHome>
			<HeroSection />
			<section className='w100 no-margin-top'>
				<PromoBar />
			</section>
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

			<section
				className={`grid-center info slide-in ${
					isShown[1] ? 'on-screen' : ''
				}`}>
				<H2 title='about' />
				<article>{readMore ? parse(aboutFull) : parse(aboutShortened)}</article>
				<button className='btn' onClick={() => setReadMore(!readMore)}>
					read {readMore ? 'less' : 'more'}
				</button>
			</section>
			<Classes show={isShown[2]} showTitle />
			<Memberships show={isShown.slice(3, 8)} />

			<Instagram show={isShown.slice(8)} />
			<Testimonials show={isShown[15]} />
		</Layout>
	);
};

export default HomePage;
