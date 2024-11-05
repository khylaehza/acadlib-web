import React, { useState } from 'react';
import { CusModal } from '../../shared';
import { useFormik } from 'formik';
import { useData } from '../../DataContext';
import moment from 'moment';
import { BorrowedForm } from '../../forms';
const AddBorrowed = ({ openBorrowed, setOpenBorrowed, qrData }) => {
	const { addItem, toBorrow, deleteItem } = useData();

	const studentBorrowed = toBorrow.filter((stud) => stud.lrn == qrData);

	const initialValues = {
		borrowedItems: studentBorrowed.map((item) => ({
			lrn: item.lrn || 'samp',
			toBorrowKey: item.borrowKey || 'samp',
			cn: item.cn || 'samp',
			created_at: moment().format(),
		})),
	};

	const form = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(...values);
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

		addItem(formData, 'borrowed');
		deleteItem(formData.toBorrowKey, 'to-borrow');
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
