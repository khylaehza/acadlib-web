import React from 'react';

import { CusFormInput, CusSelect } from '../shared';
const BooksForm = ({ form, handleImage }) => {
	return (
		<div className='mt-6 flex flex-col gap-4'>
			<div className='text-black grid grid-cols-1 gap-3'>
				<CusFormInput
					name='title'
					label={'Title'}
					value={form.values.title}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.title}
					touch={form.touched.title}
					placeholder={"e.g. Collier's Encyclopedia"}
				/>
			</div>
			<div className='text-black grid grid-cols-2 gap-3'>
				<CusFormInput
					name='cn'
					label={'Call Number'}
					value={form.values.cn}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.cn}
					touch={form.touched.cn}
					placeholder={'e.g. AE 5 C65 1987 v.1'}
				/>
				<CusFormInput
					name='author'
					label={'Author'}
					value={form.values.author}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.author}
					touch={form.touched.author}
					placeholder={'e.g. Halsey, William D.'}
				/>
			</div>
			<div className='text-black grid grid-cols-3 gap-3'>
				<CusFormInput
					name='qty'
					label={'Qty'}
					type={'number'}
					value={form.values.qty}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.qty}
					touch={form.touched.qty}
					placeholder={'e.g. 100'}
				/>
				<CusFormInput
					name='edition'
					label={'Edition'}
					value={form.values.edition}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.edition}
					touch={form.touched.edition}
					placeholder={'e.g. 2nd'}
				/>
				<CusFormInput
					name='page'
					label={'Pages'}
					type={'number'}
					value={form.values.page}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.page}
					touch={form.touched.page}
					placeholder={'e.g. 853'}
				/>
			</div>
			<div className='text-black grid grid-cols-2 gap-3'>
				<CusFormInput
					name='vol'
					label={'Volume'}
					value={form.values.vol}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.vol}
					touch={form.touched.vol}
					placeholder={'e.g. 17 (Music - Numazu)'}
				/>
				<CusFormInput
					name='isbn'
					label={'ISBN'}
					value={form.values.isbn}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.isbn}
					touch={form.touched.isbn}
					placeholder={'e.g. 1-85697-420-0'}
				/>
			</div>
			<div className='text-black grid grid-cols-2 gap-3'>
				<CusSelect
					name='genre'
					label={'Genre'}
					value={form.values.genre}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.genre}
					touch={form.touched.genre}
					options={[
						{ value: 'Academic', label: 'Academic' },
						{ value: 'Non-Fiction', label: 'Non-Fiction' },
					]}
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
						{ value: 'For All', label: 'For All' },
						{ value: 'Grade 7', label: 'Grade 7' },
						{ value: 'Grade 8', label: 'Grade 8' },
						{ value: 'Grade 9', label: 'Grade 9' },
						{ value: 'Grade 10', label: 'Grade 10' },
					]}
				/>
			</div>
			<div className='text-black grid grid-cols-3 gap-3'>
				<CusFormInput
					name='date'
					label={'Date'}
					value={form.values.date}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.date}
					touch={form.touched.date}
					type='date'
				/>
				<CusFormInput
					name='place'
					label={'Place'}
					value={form.values.place}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.place}
					touch={form.touched.place}
					placeholder={'e.g. Florida'}
				/>
				<CusFormInput
					name='publisher'
					label={'Publisher'}
					value={form.values.publisher}
					onChange={form.handleChange}
					onBlur={form.handleBlur}
					error={form.errors.publisher}
					touch={form.touched.publisher}
					placeholder={'e.g. Asia Publishing'}
				/>
			</div>
			<div className='text-black grid grid-cols-1 gap-3'>
				<CusFormInput
					name='image'
					label={'Image'}
					value={form.values.image}
					onChange={handleImage}
					onBlur={form.handleBlur}
					error={form.errors.image}
					touch={form.touched.image}
					type='file'
				/>
			</div>
		</div>
	);
};

export default BooksForm;
