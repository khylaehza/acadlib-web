import React, { useState } from 'react';
import { CusModal } from '../../shared';
import { useFormik } from 'formik';
import { useData } from '../../DataContext';
import moment from 'moment';
import { BorrowedForm } from '../../forms';
import * as Yup from 'yup';
const AddBorrowed = ({ openBorrowed, setOpenBorrowed, qrData }) => {
	const { addItem, toBorrow, deleteItem, students, editItem, books } =
		useData();

	const studentBorrowed = toBorrow.filter((stud) => stud.lrn == qrData);

	const initialValues = {
		borrowedItems: studentBorrowed.map((item) => ({
			lrn: item.lrn || 'samp',
			toBorrowKey: item.borrowKey || 'samp',
			cn: item.cn || 'samp',
			created_at: moment().format(),
			sdate: '',
			edate: '',
		})),
	};
	const validationSchema = Yup.object().shape({
		borrowedItems: Yup.array().of(
			Yup.object().shape({
				sdate: Yup.date().required('Start Date is required'),
				edate: Yup.date()
					.required('End Date is required')
					.test(
						'is-after-sdate',
						'End Date must be after Start Date',
						function (value) {
							const { sdate } = this.parent;
							return (
								value &&
								sdate &&
								moment(value).isAfter(moment(sdate))
							);
						}
					),
			})
		),
	});

	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			const completeValues = {
				...values,
				borrowedItems: initialValues.borrowedItems,
			};

			if (Array.isArray(completeValues.borrowedItems)) {
				completeValues.borrowedItems.forEach((val) => {
					addItem(val, 'borrowed');
				});
			} else {
				console.error('borrowedItems is not an array');
			}

			setOpenBorrowed(false);
		},
	});

	const handleItemSubmit = (index) => {
		const borrowedItemData = form.values.borrowedItems[index];
		const borrowedItemDetails = initialValues.borrowedItems[index];
		const formData = {
			...borrowedItemDetails,
			...borrowedItemData,
		};

		const booksKey = books.find((b) => b.cn == formData.cn)?.key;
		const bookQuan = books.find((s) => s.cn == formData.cn)?.qty;

		const updatedBook = bookQuan - 1;
		let updatedBQty = { qty: updatedBook };

		const studentKey = students.find((s) => s.lrn == formData.lrn)?.key;
		const studentQuan = students.find(
			(s) => s.lrn == formData.lrn
		)?.borrowedQuan;
		const updatedQuantity = studentQuan + 1;
		let updatedItem = { borrowedQuan: updatedQuantity };

		addItem(formData, 'borrowed');
		deleteItem(formData.toBorrowKey, 'to-borrow');
		editItem(studentKey, updatedItem, 'students');
		editItem(booksKey, updatedBQty, 'books');
	};

	return (
		<div>
			<CusModal
				btnLabel={'Add'}
				content={
					<BorrowedForm
						form={form}
						borrowed={studentBorrowed}
						handleItemSubmit={handleItemSubmit}
					/>
				}
				title={'Approved To Borrow Book'}
				setOpen={setOpenBorrowed}
				open={openBorrowed}
				form={form}
				showActions={false}
				setImageFile={() => {}}
			/>
		</div>
	);
};

export default AddBorrowed;
