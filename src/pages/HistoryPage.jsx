import React, { useState } from 'react';
import { SideNav } from '../layout';
import { CusTable, CusSearch, CusSort } from '../shared';
import { useData } from '../DataContext';

const HistoryPage = () => {
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [curRow, setCurRow] = useState();

	const { history } = useData();

	const columns = [
		{ key: 'name', label: 'Borrower' },
		{ key: 'title', label: 'Title' },
		{ key: 'author', label: 'Author' },
		{ key: 'sdate', label: 'Start Date' },
		{ key: 'edate', label: 'End' },
		{ key: 'rdate', label: 'Return Date' },
	];
	const rows = history.length > 0 ? history : [];

	return (
		<div className='flex font-montserrat'>
			<SideNav />

			<div className='flex flex-1 flex-col bg-white text-black'>
				<Header />
				<hr className='border-body' />
				<div className='flex-1 p-6'>
					<CusTable
						columns={columns}
						rows={rows}
						tableName={'history'}
						action={false}
					/>
				</div>
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6 '>
			<div className='flex gap-4 w-1/2'></div>
		</div>
	);
};

export default HistoryPage;
