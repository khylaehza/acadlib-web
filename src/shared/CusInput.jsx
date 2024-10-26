import React from 'react';

export const CusFormInput = ({
	name,
	label,
	value,
	onChange,
	onBlur,
	touch,
	error,
	placeholder,
	type = 'text',
	color = 'black',
}) => {
	return (
		<div className='w-full flex flex-col gap-1'>
			<label
				htmlFor={name}
				className={`block text-sm font-medium text-${color} text-left`}
			>
				{label}
			</label>
			<input
				name={name}
				className={`mt-1 block w-full px-3 py-2 border ${
					touch && error ? 'border-red-500' : 'border-gray-300'
				} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200 text-black`}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				placeholder={placeholder}
				type={type}
			/>
			{touch && error ? (
				<div className='text-red-500 text-xs text-left'>{error}</div>
			) : null}
		</div>
	);
};
