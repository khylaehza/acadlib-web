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
		onSubmit: (value, actions) => {
			const itemId = curRow.key;
			const updatedItem = value;
			const tableName = 'students';

			editItem(itemId, updatedItem, tableName);

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
