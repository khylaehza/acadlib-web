import React from 'react';
import { CusFormInput } from '../shared';

const BorrowedForm = ({ borrowed, form, handleItemSubmit }) => {
	return (
		<>
			{borrowed.length == 0 && <div>No Available Data.</div>}
			{borrowed.map((borrow, index) => {
				return (
					<div
						key={borrow.key}
						className='text-black grid grid-cols-4 gap-3 align-center items-center'
					>
						<p className='font-semibold mt-5'>{borrow.title}</p>
						<CusFormInput
							name={`borrowedItems[${index}].sdate`}
							label='Start Date'
							value={
								form.values.borrowedItems?.[index]?.sdate || ''
							}
							onChange={form.handleChange}
							onBlur={form.handleBlur}
							error={form.errors?.borrowedItems?.[index]?.sdate}
							touch={form.touched?.borrowedItems?.[index]?.sdate}
							type='date'
						/>
						<CusFormInput
							name={`borrowedItems[${index}].edate`}
							label='End Date'
							value={
								form.values.borrowedItems?.[index]?.edate || ''
							}
							onChange={form.handleChange}
							onBlur={form.handleBlur}
							error={form.errors?.borrowedItems?.[index]?.edate}
							touch={form.touched?.borrowedItems?.[index]?.edate}
							type='date'
						/>
						<button
							type='button'
							onClick={() => handleItemSubmit(index)}
							className='inline-flex w-full justify-center rounded-md bg-header px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow sm:ml-3 sm:w-auto mt-7'
						>
							Approve
						</button>
					</div>
				);
			})}
			{/* <button
				type='submit'
				className='mt-4 text-white px-3 py-2 rounded-lg w-full'
			>
				Approve All
			</button> */}
		</>
	);
};

export default BorrowedForm;
