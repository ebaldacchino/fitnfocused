import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import Form from '../components/cancellations/Form';
import useForm from '../functions/useForm';
import validate from '../functions/validateCancellations';
import HeroImage from '../components/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/contact.css';

const query = graphql`
	{
		imageSharp(id: { eq: "e8e20fec-b4a5-567e-a00f-0b708f8a71e8" }) {
			gatsbyImageData(formats: [AUTO, WEBP, AVIF])
		}
	}
`;
const Cancellations = () => {
	const {
		imageSharp: { gatsbyImageData },
	} = useStaticQuery(query);

	const { isShown } = useApp();

	const startValues = {
		firstname: '',
		surname: '',
		email: '',
		phone: '',
		type: 'Suspend',
		from: '',
		until: '',
		message: '',
	};
	const {
		serverState,
		setServerState,
		values,
		setValues,
		errors,
		handleSubmit,
		handleChange,
	} = useForm(validate, startValues);

	const handleBlur = () => {
		if (values.type === 'Suspend') return;
		setValues({
			...values,
			until: '',
		});
	};
	return (
		<Layout
			title='Cancellations'
			submittedFormFunction={() =>
				setServerState({ ...serverState, submitted: false })
			}
			submittedFormIsVisible={serverState.submitted}
			submittedForm>
			<HeroImage title='cancellations' imageData={gatsbyImageData} />
			<section className='min-w35 grid-center'>
				<Form
					show={isShown[0]}
					serverState={serverState}
					values={values}
					errors={errors}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					handleBlur={handleBlur}
				/>
			</section>
		</Layout>
	);
};

export default Cancellations;
