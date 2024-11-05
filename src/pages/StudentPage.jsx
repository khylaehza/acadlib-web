import React, { useState } from 'react';
import { SideNav } from '../layout';
import { CusTable, CusSearch, CusSort } from '../shared';
import { useData } from '../DataContext';

const StudentPage = () => {
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	const { students } = useData();

	const columns = [
		{ key: 'lrn', label: 'LRN No' },
		{ key: 'name', label: 'Full Name' },
		{ key: 'grade', label: 'Grade' },
		{ key: 'section', label: 'Section' },
		{ key: 'guardian', label: 'Guardian' },
		{ key: 'cnum', label: 'Contact Number' },
		{ key: 'borrowedQuan', label: 'No. Of Books Borrowed' },
		{ key: 'created_at', label: 'Registered Date', type: 'time' },
	];
	const rows =
		students?.length > 0
			? students
					.filter((data) => {
						return curSearch.toLowerCase() === ''
							? data
							: data.name
									.toLowerCase()
									.includes(curSearch.toLowerCase());
					})
					.sort((a, b) => {
						const dateA = new Date(a.created_at);
						const dateB = new Date(b.created_at);
						return sortOrder === 'asc'
							? dateA - dateB
							: dateB - dateA;
					})
			: [];

	return (
		<div className='flex font-montserrat'>
			<SideNav />

			<div className='flex flex-1 flex-col bg-white text-black'>
				<Header
					setCurSearch={setCurSearch}
					curSearch={curSearch}
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
				<hr className='border-body' />
				<div className='flex-1 p-6'>
					<CusTable
						columns={columns}
						rows={rows}
						tableName={'students'}
						action={false}
					/>
				</div>
			</div>
		</div>
	);
};

const Header = ({ setCurSearch, curSearch, sortOrder, setSortOrder }) => {
	const [showScanBook, setScanBook] = useState(false);

	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6 '>
			<div className='flex gap-4 w-1/2'>
				<CusSearch
					setCurSearch={setCurSearch}
					curSearch={curSearch}
					label={'name'}
				/>
				<CusSort
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
			</div>
		</div>
	);
};

export default StudentPage;
