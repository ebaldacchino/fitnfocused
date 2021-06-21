import React from 'react';
import Layout from '../components/layout';
import parse from 'html-react-parser';
import GetSignup from '../components/getSignup';
import useApp from '../functions/useApp';
import HeroImage from '../components/HeroImage';
import TimerSection from '../components/TimerSection';
import '../styles/pages/class-page.css';
const Page = ({ pageContext, path }) => {
	const {
		title,
		excerpt,
		startDate,
		featuredImage: {
			node: {
				localFile: {
					childImageSharp: { gatsbyImageData },
				},
			},
		},
	} = pageContext;

	const { isShown } = useApp();
	return (
		<>
			<Layout
				title={title
					.split(' ')
					.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
					.join(' ')}>
				<HeroImage title={title} imageData={gatsbyImageData} path={path} />
				{startDate && new Date(startDate) - Date.now() > 0 && (
					<TimerSection startDate={new Date(startDate)} show={true} />
				)}
				<section className='about-class'>
					<article>{parse(excerpt)}</article>
				</section>
				<GetSignup
					show={isShown[1]}
					title='$28 for 28 days'
					description={`Come try the ${title} today!`}
					buttonText='try now'
				/>
			</Layout>
		</>
	);
};

export default Page;
