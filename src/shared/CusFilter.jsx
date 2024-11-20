import React, { useState } from 'react';

const CusFilter = ({ selectedGrade, setSelectedGrade, student }) => {
	console.log(selectedGrade);
	const [showDropdown, setShowDropdown] = useState(false);
	const toggleDropdown = () => {
		setShowDropdown((prevState) => !prevState);
	};

	const handleSelectChange = (e) => {
		setSelectedGrade(e.target.value);
		setShowDropdown(false);
	};

	return (
		<div className='relative flex items-center gap-2  w-48'>
			<button
				onClick={toggleDropdown}
				className='flex items-center gap-2 p-3 bg-gray-200 rounded border-none rounded-lg shadow-lg'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
					/>
				</svg>
				<span className='text-xs'>
					{selectedGrade === 'all'
						? 'All'
						: `${student ? `Grade ${selectedGrade}` : selectedGrade}`}
				</span>
			</button>

			{/* Dropdown list for selecting grade */}
			{showDropdown && (
				<div className='absolute top-full left-0 mt-1 bg-white border shadow-md z-10'>
					<button
						onClick={() =>
							handleSelectChange({ target: { value: 'all' } })
						}
						className='block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-200 w-full text-left'
					>
						All Grades
					</button>
					<button
						onClick={() =>
							handleSelectChange({
								target: { value: student ? '7' : 'Grade 7' },
							})
						}
						className='block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-200 w-full text-left'
					>
						Grade 7
					</button>
					<button
						onClick={() =>
							handleSelectChange({
								target: { value: student ? '8' : 'Grade 8' },
							})
						}
						className='block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-200 w-full text-left'
					>
						Grade 8
					</button>
					<button
						onClick={() =>
							handleSelectChange({
								target: { value: student ? '9' : 'Grade 9' },
							})
						}
						className='block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-200 w-full text-left'
					>
						Grade 9
					</button>
					<button
						onClick={() =>
							handleSelectChange({
								target: { value: student ? '10' : 'Grade 10' },
							})
						}
						className='block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-200 w-full text-left'
					>
						Grade 10
					</button>
				</div>
			)}
		</div>
	);
};

export default CusFilter;
