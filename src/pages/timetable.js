import React from 'react';
import Layout from '../components/layout';
import IframeResizer from 'iframe-resizer-react';
import GetSignup from '../components/getSignup';
import useApp from '../functions/useApp';
import ClassList from '../components/ClassList';
import '../styles/components/iframes.css';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
	{
		imageSharp(id: { eq: "e8e20fec-b4a5-567e-a00f-0b708f8a71e8" }) {
			gatsbyImageData(formats: [AUTO, WEBP, AVIF])
		}
	}
`;
const Timetable = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);
	const { isShown } = useApp();
	return (
		<Layout title='Timetable'>
			<HeroImage title='timetable' imageData={gatsbyImageData} />{' '}
			<section className='w100 grid-center'>
				<IframeResizer
					src='https://fitnfocused.gymmasteronline.com/portal/classcalendar?logo=0'
					style={{ width: '1px', minWidth: '100%' }}
					id='iFrameResizer0'
					className='gmiframe'
					title='Calendar'
				/>
			</section>
			<GetSignup
				show={isShown[0]}
				title='$28 for 28 days'
				description="Come try Geelong's best value offer today!"
				buttonText='try now'
			/>
			<ClassList show={isShown[1]} hideButton />
		</Layout>
	);
};

export default Timetable;
