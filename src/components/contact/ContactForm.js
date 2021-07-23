import React from 'react';
const ContactForm = ({
	serverState,
	values,
	errors,
	handleSubmit,
	handleChange,
	show,
}) => {
	return (
		<>
			<form
				className={`form w100 slide-in ${show ? 'on-screen' : ''}`}
				noValidate
				onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					className={
						!serverState.validating ? '' : errors.name ? 'error' : 'success'
					}
					type='text'
					name='name'
					placeholder='e.g. John Doe'
					value={values.name}
					onChange={handleChange}
				/>
				{serverState.validating && errors.name && <small>{errors.name}</small>}
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					className={
						!serverState.validating ? '' : errors.email ? 'error' : 'success'
					}
					value={values.email}
					placeholder='e.g. johndoe@gmail.com'
					onChange={handleChange}
				/>
				{serverState.validating && errors.email && (
					<small>{errors.email}</small>
				)}
				<label htmlFor='phone'>Phone</label>
				<input
					type='phone'
					name='phone'
					className={
						!serverState.validating ? '' : errors.phone ? 'error' : 'success'
					}
					value={values.phone}
					placeholder='e.g. 0499 999 999'
					onChange={handleChange}
				/>
				{serverState.validating && errors.phone && (
					<small>{errors.phone}</small>
				)}
				<label htmlFor='message'>Message</label>
				<textarea
					name='message'
					className={
						!serverState.validating ? '' : errors.message ? 'error' : 'success'
					}
					value={values.message}
					placeholder='Please type your message here...'
					onChange={handleChange}
					rows='5'></textarea>
				{serverState.validating && errors.message && (
					<small>{errors.message}</small>
				)}

				<button className='btn' disabled={serverState.submitting}>
					{serverState.submitting ? 'Sending...' : 'send'}
				</button>
			</form>
		</>
	);
};
export default ContactForm;
