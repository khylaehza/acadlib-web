import React from 'react';

import { CusFormInput, CusSelect } from '../shared';
const StudentsForm = ({ form, handleImage }) => {
	return (
		<div className='mt-6 flex flex-col gap-4'>
			<div className='text-black grid grid-cols-3 gap-3'>
				<CusFormInput
					name='fname'
					label={'First Name'}
					value={form.values.fname}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.fname}
					touch={form.touched.fname}
				/>
				<CusFormInput
					name='mname'
					label={'Middle Name'}
					value={form.values.mname}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.mname}
					touch={form.touched.mname}
				/>
				<CusFormInput
					name='lname'
					label={'Last Name'}
					value={form.values.lname}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.lname}
					touch={form.touched.lname}
				/>
			</div>

			<div className='text-black grid grid-cols-1 gap-3'>
				<CusFormInput
					name='lrn'
					label={'LRN'}
					value={form.values.lrn}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.lrn}
					touch={form.touched.lrn}
				/>
			</div>
			<div className='text-black grid grid-cols-2 gap-3'>
				<CusFormInput
					name='section'
					label={'Section'}
					value={form.values.section}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.section}
					touch={form.touched.section}
					placeholder={'e.g. 1-85697-420-0'}
				/>
				<CusSelect
					name='grade'
					label={'Grade'}
					value={form.values.grade}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.grade}
					touch={form.touched.grade}
					options={[
						{ value: '7', label: 'Grade 7' },
						{ value: '8', label: 'Grade 8' },
						{ value: '9', label: 'Grade 9' },
						{ value: '10', label: 'Grade 10' },
					]}
				/>
			</div>
		</div>
	);
};

export default StudentsForm;
