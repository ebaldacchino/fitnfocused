import React from 'react';
import Layout from '../components/layout';
import faqData from '../constants/faq';
import AccordionItem from '../components/faq/AccordionItem';
import useApp from '../functions/useApp';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/contact.css';
import '../styles/pages/faq.css';
const query = graphql`
	{
		imageSharp(id: { eq: "e8e20fec-b4a5-567e-a00f-0b708f8a71e8" }) {
			gatsbyImageData(formats: [AUTO, WEBP, AVIF])
		}
	}
`;
const defaultFalse = faqData.map(() => false);
const defaultZero = faqData.map(() => 0);
const Faq = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);
	const [isShown, setIsShown] = React.useState(defaultFalse);
	const [panelHeights, setPanelHeights] = React.useState(defaultZero);
	const { windowHeight, windowWidth } = useApp();
	const handleAccordion = (id) => {
		const values = faqData.map((faq, index) => id === index && !isShown[index]);
		setIsShown(values);
	};

	const getPanelHeights = () => {
		setPanelHeights(faqData.map((faq) => '100%'));
		setTimeout(getPanelScrollHeights, 100);
	};

	const getPanelScrollHeights = () => {
		const panels = Array.from(document.querySelectorAll('.panel'));
		const heights = panels.map((panel) => panel.scrollHeight);
		setPanelHeights(heights);
	};
	React.useEffect(getPanelHeights, [windowHeight, windowWidth]);

	return (
		<Layout title='Frequently Asked Questions'>
			<HeroImage title='faq' imageData={gatsbyImageData} />
			<section>
				{faqData.map((faq, id) => {
					return (
						<AccordionItem
							{...faq}
							key={id}
							isShown={isShown[id]}
							handleAccordion={() => handleAccordion(id)}
							panelHeight={panelHeights[id]}
						/>
					);
				})}
			</section>
		</Layout>
	);
};

export default Faq;
