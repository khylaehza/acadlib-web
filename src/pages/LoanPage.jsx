import React, { useState } from 'react';
import { SideNav } from '../layout';
import {
	CusSearch,
	CusSort,
	CusTable,
	CusNotif,
	CusQRScanner,
	CusPrint,
} from '../shared';
import { AddBorrowed } from '../modals';
import { useData } from '../DataContext';

const LoanPage = () => {
	const { borrowed, books, students } = useData();
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	const columns = [
		{ key: 'name', label: 'Borrower' },
		{ key: 'title', label: 'Title' },
		{ key: 'author', label: 'Author' },
		{ key: 'sdate', label: 'Borrowed Date', type: 'time' },
		{ key: 'edate', label: 'Return Date', type: 'time' },
	];
	const rows = borrowed
		.map((item) => {
			const student = students.find(
				(student) => student.lrn === item.lrn
			);
			const book = books.find((book) => book.cn === item.cn);
			return {
				key: item.borrowedKey,
				name: student ? student.name : 'Unknown',
				lrn: student ? student.lrn : 'Unknown',
				title: book ? book.title : 'Unknown',
				author: book ? book.author : 'Unknown',
				sdate: item.sdate,
				edate: item.edate,
			};
		})
		.filter((data) => {
			return curSearch.toLowerCase() === ''
				? data
				: data.name.toLowerCase().includes(curSearch.toLowerCase()) ||
						data.title
							.toLowerCase()
							.includes(curSearch.toLowerCase());
		})
		.sort((a, b) => {
			const dateA = new Date(a.created_at);
			const dateB = new Date(b.created_at);
			return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
		});

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
						tableName={'borrowed'}
						returnAct={true}
					/>
				</div>
			</div>
			<CusNotif />
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
	const [qrData, setQrData] = useState(null);
	const [openBorrowed, setOpenBorrowed] = useState(false);

	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6 '>
			<div className='flex gap-4 w-1/2'>
				<CusSearch
					setCurSearch={setCurSearch}
					curSearch={curSearch}
					label={'title, borrower'}
				/>
				<CusSort
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
			</div>
			<div className='flex gap-4 w-1/2 justify-end'>
				<CusPrint
					rows={rows}
					columns={columns}
					module={'Library Loans'}
				/>
				<CusQRScanner
					setQrData={setQrData}
					setOpenBorrowed={setOpenBorrowed}
				/>
				<AddBorrowed
					openBorrowed={openBorrowed}
					setOpenBorrowed={setOpenBorrowed}
					qrData={qrData}
				/>
			</div>
		</div>
	);
};

export default LoanPage;
