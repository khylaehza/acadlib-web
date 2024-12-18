import React, { useState } from 'react';
import { SideNav } from '../layout';
import { CusTable, CusSearch, CusSort, CusPrint } from '../shared';
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
		{ key: 'edate', label: 'End Date' },
		{ key: 'rdate', label: 'Return Date', type: 'time' },
	];

	const rows =
		history?.length > 0
			? history
					.filter((data) => {
						return curSearch.toLowerCase() === ''
							? data
							: data.title
									.toLowerCase()
									.includes(curSearch.toLowerCase()) ||
									data.author
										.toLowerCase()
										.includes(curSearch.toLowerCase());
					})
					.sort((a, b) => {
						const dateA = new Date(a.rdate);
						const dateB = new Date(b.rdate);
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
					rows={rows}
					columns={columns}
				/>
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

const Header = ({
	setCurSearch,
	curSearch,
	sortOrder,
	setSortOrder,
	rows,
	columns,
}) => {
	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6 w-full'>
			<div className='flex gap-4 w-1/2'>
				<CusSearch
					setCurSearch={setCurSearch}
					curSearch={curSearch}
					label={'name, author'}
				/>
				<CusSort
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
			</div>

			<div className='flex gap-4 w-1/2 ml-auto justify-end'>
				<CusPrint
					rows={rows}
					columns={columns}
					module={'History'}
				/>
			</div>
		</div>
	);
};

export default HistoryPage;
