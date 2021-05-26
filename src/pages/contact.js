import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import Map from '../components/contact/Map';
import Form from '../components/contact/ContactForm';
import useForm from '../functions/useForm';
import validateInfo from '../functions/validateInfo';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/contact.css';

const query = graphql`
	{
		imageSharp(id: { eq: "70fed8fc-3fb1-5958-acfd-c92c1cfb9ac1" }) {
			gatsbyImageData
		}
	}
`;

const Contact = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);

	const { isShown } = useApp();

	const startValues = {
		name: '',
		email: '',
		message: '',
		phone: '',
	};
	const {
		serverState,
		setServerState,
		values,
		errors,
		handleSubmit,
		handleChange,
	} = useForm(validateInfo, startValues);
	return (
		<Layout
			title='Contact Us'
			submittedFormFunction={() =>
				setServerState({ ...serverState, submitted: false })
			}
			submittedFormIsVisible={serverState.submitted}
			submittedForm
			>
			<HeroImage title='get in touch' imageData={gatsbyImageData} />
			<section className='grid-center col2'>
				<Form
					show={isShown[0]}
					serverState={serverState}
					values={values}
					errors={errors}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				<Map show={isShown[1]} />
			</section>
		</Layout>
	);
};

export default Contact;
