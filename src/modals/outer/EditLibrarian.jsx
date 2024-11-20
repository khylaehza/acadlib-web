import React, { useState } from 'react';
import { CusModal } from '../../shared';
import { ChangePassForm } from '../../forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useData } from '../../DataContext';

const EditLibrarian = () => {
	const [showEditPass, setChangePass] = useState(false);
	const [error, setError] = useState('');

	const { editItem, librarian } = useData();

	const editForm = useFormik({
		initialValues: {
			email: '',
			pass: '',
			conpass: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email format.')
				.required('Email is required.'),
			pass: Yup.string()
				.required('Password is required.')
				.min(8, 'Password must be at least 8 characters.')
				.matches(
					/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
					'Password must include uppercase, lowercase, number, and special character.'
				),
			conpass: Yup.string()
				.required('Confirm Password is required.')
				.oneOf([Yup.ref('pass'), null], 'Passwords must match.'),
		}),
		onSubmit: (values, actions) => {
			const foundLibrarian = librarian.find(
				(lib) => lib.email.toLowerCase() === values.email.toLowerCase()
			);

			if (foundLibrarian) {
				const itemId = foundLibrarian.librarianKey;
				const updatedItem = {
					...foundLibrarian,
					pass: values.pass,
				};
				editItem(itemId, updatedItem, 'librarian');
				setError('');
				setChangePass(false);
				actions.resetForm();
			} else {
				setError('No librarian found with this email.');
			}
		},
	});

	return (
		<div className='w-full'>
			<button
				className='mt-2 w-full bg-transparent text-white border-none outline-none'
				type='button'
				onClick={() => setChangePass(true)}
			>
				Forgot Password?
			</button>

			<CusModal
				btnLabel={'Change'}
				content={<ChangePassForm form={editForm} />}
				title={'Change your password here'}
				setOpen={setChangePass}
				open={showEditPass}
				form={editForm}
				error={
					error && (
						<p className='text-red-500 text-sm mt-2'>{error}</p>
					)
				}
			/>
		</div>
	);
};

export default EditLibrarian;
