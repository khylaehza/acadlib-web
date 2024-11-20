import React from 'react';

import { CusFormInput, CusSelect } from '../shared';
const LibrarianForm = ({ form, handleImage }) => {
	return (
		<div className='mt-6 flex flex-col gap-4'>
			<div className='text-black grid grid-cols-1 gap-3'>
				<CusFormInput
					name='fname'
					label={'First Name'}
					value={form.values.fname}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.fname}
					touch={form.touched.fname}
					placeholder={'First Name'}
				/>
			</div>
			<div className='text-black grid grid-cols-1 gap-3'>
				<CusFormInput
					name='lname'
					label={'Last Name'}
					value={form.values.lname}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.lname}
					touch={form.touched.lname}
					placeholder={'Last Name'}
				/>
			</div>
			<div className='text-black grid grid-cols-1 gap-3'>
				<CusFormInput
					name='email'
					label={'Email'}
					value={form.values.email}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.email}
					touch={form.touched.email}
					placeholder={'email@acadlib.com'}
				/>
			</div>
			<div className='text-black grid grid-cols-2 gap-3'>
				<CusFormInput
					name='pass'
					label={'Password'}
					value={form.values.pass}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.pass}
					touch={form.touched.pass}
					placeholder={'•••••••••'}
					type='password'
				/>
				<CusFormInput
					name='conpass'
					label={'Confirm Password'}
					value={form.values.conpass}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.conpass}
					touch={form.touched.conpass}
					placeholder={'•••••••••'}
					type='password'
				/>
			</div>
		</div>
	);
};

export default LibrarianForm;
