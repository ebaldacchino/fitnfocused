import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (validate, startValues) => {
	const [values, setValues] = useState(startValues);
	const [errors, setErrors] = useState({});
	const [serverState, setServerState] = useState({
		submitting: false,
		// status: null,
		submitted: false,
		validating: false,
	});
	const handleChange = (e) => {
		const { name, value, checked, type } = e.target;
		const result = type === 'checkbox' ? checked : value;
		setValues({
			...values,
			[name]: result,
		});
	};
	const handleResponse = (ok, msg) => {
		setServerState({
			submitting: false,
			// status: { ok, msg },
			submitted: true,
			validating: false,
		});
		ok && setValues(startValues);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setServerState({
			...serverState,
			submitting: true,
			validating: true,
		});
		const hasErrors = Object.keys(errors).length === 0;
		if (hasErrors) {
			const form = e.target;
			axios({
				method: 'POST',
				url: process.env.FORMSPREE_URL,
				data: new FormData(form),
			})
				.then((r) => {
					handleResponse(true, 'Thanks!');
					setServerState({
						...serverState,
						submitting: false,
						submitted: true,
						validating: false,
					});
				})
				.catch((r) => {
					handleResponse(false, r.response.data.error);
				});
		} 
		setServerState({
			...serverState,
			submitting: false,
			validating: true,
		});
	}; 
	const updateErrors = () => validate && setErrors(validate(values));
	useEffect(updateErrors, [values, validate]);

	return {
		serverState,
		setServerState,
		values,
		setValues,
		errors,
		handleSubmit,
		handleChange,
	};
};

export default useForm;
