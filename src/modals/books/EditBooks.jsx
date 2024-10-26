import React, { useState } from 'react';
import { CusPrimButton, CusModal } from '../../shared';
import { BooksForm } from '../../forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useData } from '../../DataContext';

const EditBooks = ({ curRow, setEditBook, showEditBook }) => {
	const [imageFile, setImageFile] = useState(null);

	const OnImgChange = (event) => {
		setImageFile(event.target.files[0]);
	};
	const { editItem } = useData();

	const editForm = useFormik({
		initialValues: {
			title: curRow.title,
			cn: curRow.cn,
			author: curRow.author,
			qty: curRow.qty,
			edition: curRow.edition,
			vol: curRow.vol,
			page: curRow.page,
			date: curRow.date,
			isbn: curRow.isbn,
			place: curRow.place,
			publisher: curRow.publisher,
		},
		enableReinitialize: true,
		onSubmit: (value, actions) => {
			const itemId = curRow.key;
			const updatedItem = value;
			const tableName = 'books';
			const newImageFile = imageFile;
			const existingImageUrl = imageFile ? curRow.image : null;

			editItem(
				itemId,
				updatedItem,
				tableName,
				newImageFile,
				existingImageUrl
			);

			actions.resetForm();
			setImageFile(null);
			setEditBook(false);
		},
	});
	return (
		<div>
			<CusModal
				btnLabel={'Edit'}
				content={
					<BooksForm
						form={editForm}
						handleImage={OnImgChange}
					/>
				}
				title={'Edit Book'}
				setOpen={setEditBook}
				setImageFile={setImageFile}
				open={showEditBook}
				form={editForm}
			/>
		</div>
	);
};

export default EditBooks;
