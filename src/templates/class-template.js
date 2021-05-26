import React from 'react';
import Layout from '../components/layout';
import parse from 'html-react-parser';
import GetSignup from '../components/getSignup';
import useApp from '../functions/useApp';
import Classes from '../components/ClassList';
import HeroImage from '../components/HeroImage';
import '../styles/pages/class-page.css';

const Page = ({ pageContext, path }) => {
	const {
		title,
		excerpt,
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
				<HeroImage title={title} imageData={gatsbyImageData} />
				<section className='about-class'>
					<article>{parse(excerpt)}</article>
				</section>
				<GetSignup
					show={isShown[0]}
					title='$28 for 28 days'
					description={`Come try our ${title} class today!`}
					buttonText='try now'
				/>
				<Classes show={isShown[1]} path={path} />
			</Layout>
		</>
	);
};

export default Page;
