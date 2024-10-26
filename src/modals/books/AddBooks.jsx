import React, { useState } from 'react';
import { CusPrimButton, CusModal } from '../../shared';
import { BooksForm } from '../../forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useData } from '../../DataContext';
import moment from 'moment';

const AddBooks = () => {
	const [showAddBook, setAddBook] = useState(false);
	const [imageFile, setImageFile] = useState(null);

	const OnImgChange = (event) => {
		setImageFile(event.target.files[0]);
	};
	const { addItem } = useData();

	const form = useFormik({
		initialValues: {
			title: '',
			cn: '',
			author: '',
			qty: '',
			edition: '',
			vol: '',
			page: '',
			date: '',
			isbn: '',
			place: '',
			publisher: '',
			borrowed: 0,
			created_at: moment().format(),
		},
		validationSchema: Yup.object({
			title: Yup.string().required('Title is required.'),
			cn: Yup.string().required('Call Number is required.'),
			qty: Yup.number().required('Quantity is required.'),
			page: Yup.string().required('Page is required.'),
			date: Yup.date().required('Copyright Date is required.'),
			publisher: Yup.string().required('Publisher is required.'),
		}),
		onSubmit: (value, actions) => {
			addItem(value, 'books', imageFile);

			actions.resetForm();
			setImageFile(null);
			setAddBook(false);
		},
	});

	return (
		<div>
			<CusPrimButton
				label={'ADD BOOK'}
				color={'black'}
				text={'white'}
				w='36'
				onClick={() => setAddBook(true)}
			/>
			<CusModal
				btnLabel={'Add'}
				content={
					<BooksForm
						form={form}
						handleImage={OnImgChange}
					/>
				}
				title={'Add Book'}
				setOpen={setAddBook}
				open={showAddBook}
				form={form}
			/>
		</div>
	);
};

export default AddBooks;
