import React, { useState } from 'react';
import { CusPrimButton, CusModal } from '../../shared';
import { StudentsForm } from '../../forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useData } from '../../DataContext';

const EditStudents = ({ curRow, setEditBook, showEditBook }) => {
	const [imageFile, setImageFile] = useState(null);

	const { editItem } = useData();

	const OnImgChange = (event) => {
		setImageFile(event.target.files[0]);
	};

	const editForm = useFormik({
		initialValues: {
			fname: curRow.fname,
			lname: curRow.lname,
			mname: curRow.mname,
			lrn: curRow.lrn,
			grade: curRow.grade,
			section: curRow.section,
			guardian: curRow.guardian,
			cnum: curRow.cnum,
			pass: curRow.pass,
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			npass: Yup.string()
				.min(8, 'Password must be at least 8 characters.')
				.matches(
					/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
					'Password must include uppercase, lowercase, number, and special character.'
				),
			conpass: Yup.string().oneOf(
				[Yup.ref('npass'), null],
				'Passwords must match.'
			),
			cnum: Yup.string().matches(
				/^(09|\+639)\d{9}$/,
				'Contact number must be valid and start with 09 or +639.'
			),
		}),
		onSubmit: (value, actions) => {
			const itemId = curRow.key;
			const updatedItem = value;
			const tableName = 'students';
			const newImageFile = imageFile;
			const existingImageUrl = imageFile ? curRow.image : null;
			if (value.npass && value.conpass) {
				updatedItem.pass = value.npass;
			}

			editItem(
				itemId,
				updatedItem,
				tableName,
				newImageFile,
				existingImageUrl
			);

			actions.resetForm();
			setEditBook(false);
		},
	});
	return (
		<div>
			<CusModal
				btnLabel={'Edit'}
				content={
					<StudentsForm
						form={editForm}
						handleImage={OnImgChange}
					/>
				}
				title={'Edit Student'}
				setOpen={setEditBook}
				setImageFile={setImageFile}
				open={showEditBook}
				form={editForm}
			/>
		</div>
	);
};

export default EditStudents;
