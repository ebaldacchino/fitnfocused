import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/components/form-submitted.css';
import { motion, AnimatePresence } from 'framer-motion';
const SubmittedForm = ({ closeSection, isVisible }) => {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.section
					className='form-submitted-bg'
					key='modal'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0 }}
					// transition={{
					// 	type: 'spring',
					// 	mass: 0.35,
					// 	stiffness: 75,
					// 	duration: 0.2,
					// }}
					>
					<motion.article
						className='form form-submitted-container'
						key='modal'
						initial={{ opacity: 0, y: '100vh' }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: '100vh' }}
						// transition={{
						// 	type: 'spring',
						// 	mass: 0.35,
						// 	stiffness: 75,
						// 	duration: 0.2,
						// }}
						>
						<h2 className='glow'>success</h2>
						<FaCheckCircle className='icon' />
						<p>Thank you for reaching out. We'll be in touch soon!</p>
						<button className='submit-btn btn' onClick={closeSection}>
							ok
						</button>
					</motion.article>
				</motion.section>
			)}
		</AnimatePresence>
	);
};
export default SubmittedForm;
