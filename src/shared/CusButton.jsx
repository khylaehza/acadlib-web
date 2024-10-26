import React from 'react';

export const CusPrimButton = ({
	label,
	onClick,
	color = 'primary',
	w = 'full',
	text = 'black',
	type = 'button',
}) => {
	return (
		<button
			className={`bg-${color} text-${text} focus:border-black w-${w} mt-2 outline-none border-none `}
			onClick={onClick}
			type={type}
		>
			{label.toUpperCase()}
		</button>
	);
};

export const CusSecButton = ({
	label,
	onClick,
	color = 'primary',
	w = 'full',
	text = 'black',
}) => {
	return (
		<button
			className={`bg-${color} text-${text} hover:border-black w-${w} mt-2 outline-none border-black shadow-sm`}
			onClick={onClick}
		>
			{label.toUpperCase()}
		</button>
	);
};
