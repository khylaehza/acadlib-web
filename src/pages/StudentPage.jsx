import React, { useState } from 'react';
import { SideNav } from '../layout';
import { CusTable, CusSearch, CusSort } from '../shared';

const StudentPage = () => {
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	const columns = [
		{ key: 'image', label: 'LRN No', type: 'image' },
		{ key: 'cn', label: 'Full Name' },
		{ key: 'title', label: 'Grade' },
		{ key: 'author', label: 'Section' },
		{ key: 'qty', label: 'Guardian' },
		{ key: 'edition', label: 'Contact Number' },
		{ key: 'vol', label: 'No. Of Books Borrowed' },
		{ key: 'date', label: 'Registered Date' },
	];
	const rows = [];

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
