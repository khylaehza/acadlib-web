import React, { useState } from 'react';
import { SideNav } from '../layout';
import {
	CusSearch,
	CusSort,
	CusSecButton,
	CusTable,
	CusNotif,
	CusQRScanner,
} from '../shared';

const LoanPage = () => {
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	const columns = [
		{ key: 'image', label: 'Student', type: 'image' },
		{ key: 'image', label: 'Title', type: 'image' },
		{ key: 'cn', label: 'Author' },
		{ key: 'title', label: 'Borrowed Date' },
		{ key: 'author', label: 'Return Date' },
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
						tableName={'loans'}
					/>
				</div>
			</div>
			<CusNotif />
		</div>
	);
};

const Header = ({ setCurSearch, curSearch, sortOrder, setSortOrder }) => {
	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6 '>
			<div className='flex gap-4 w-1/2'>
				<CusSearch
					setCurSearch={setCurSearch}
					curSearch={curSearch}
					label={'title'}
				/>
				<CusSort
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
			</div>
			<div className='flex gap-4 w-1/2 justify-end'>
				<CusQRScanner />
				{/* <AddBooks /> */}
			</div>
		</div>
	);
};

export default LoanPage;
