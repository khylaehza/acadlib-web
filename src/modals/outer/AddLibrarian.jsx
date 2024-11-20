import React, { useState } from 'react';
import { CusPrimButton, CusModal } from '../../shared';
import { LibrarianForm } from '../../forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useData } from '../../DataContext';
import moment from 'moment';

const AddLibrarian = () => {
	const [showAddLib, setAddLib] = useState(false);
	const [imageFile, setImageFile] = useState(null);

	const OnImgChange = (event) => {
		setImageFile(event.target.files[0]);
	};
	const { addItem } = useData();

	const PASS_REGEX =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_()]).{8,}$/;

	const form = useFormik({
		initialValues: {
			fname: '',
			lname: '',
			email: '',
			pass: '',
			conpass: '',
			created_at: moment().format(),
		},
		validationSchema: Yup.object({
			fname: Yup.string().required('First name is required.'),
			lname: Yup.string().required('Last name is required.'),
			email: Yup.string()
				.email('Invalid email address.')
				.required('Email is required.'),
			pass: Yup.string()
				.matches(
					PASS_REGEX,
					'Password must be at least 8 characters, with one uppercase, one lowercase, one number, and one special character.'
				)
				.required('Password is required.'),
			conpass: Yup.string()
				.oneOf([Yup.ref('pass'), null], 'Passwords must match.')
				.required(' Confirm Password is required.'),
		}),
		onSubmit: (value, actions) => {
			addItem(value, 'librarian', imageFile);

			actions.resetForm();
			setImageFile(null);
			setAddLib(false);
		},
	});

	return (
		<div>
			<CusPrimButton
				label={'REGISTER'}
				color={'black'}
				text={'white'}
				w='36'
				onClick={() => setAddLib(true)}
			/>
			<CusModal
				btnLabel={'Add'}
				content={
					<LibrarianForm
						form={form}
						handleImage={OnImgChange}
					/>
				}
				title={'Register'}
				setOpen={setAddLib}
				open={showAddLib}
				form={form}
				setImageFile={setImageFile}
			/>
		</div>
	);
};

export default AddLibrarian;
