import React, { useState } from 'react';
import { SideNav } from '../layout';
import { CusTable, CusSearch, CusSort, CusPrint } from '../shared';
import { useData } from '../DataContext';
import { EditStudents } from '../modals';

const DeletedBooksPage = () => {
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [curRow, setCurRow] = useState();
	const [showEditStud, setEditStud] = useState(false);

	const { deletedBooks } = useData();

	const columns = [
		{ key: 'cn', label: 'CN' },
		{ key: 'title', label: 'Title' },
		{ key: 'author', label: 'Author' },
		{ key: 'qty', label: 'Qty' },
		{ key: 'edition', label: 'Edition' },
		{ key: 'vol', label: 'Subject' },
		{ key: 'page', label: 'Pages' },
		{ key: 'date', label: 'Date', type: 'time' },
		{ key: 'isbn', label: 'ISBN' },
		{ key: 'place', label: 'Place' },
		{ key: 'publisher', label: 'Publisher' },
		{ key: 'grade', label: 'Grade' },
	];

	const rows =
		deletedBooks?.length > 0
			? deletedBooks
					.filter((data) => {
						return curSearch.toLowerCase() === ''
							? data
							: curSearch.toLowerCase() === ''
								? data
								: data.title
										.toLowerCase()
										.includes(curSearch.toLowerCase()) ||
									data.author
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
					columns={columns}
					rows={rows}
				/>
				<hr className='border-body' />

				<div className='flex-1 p-6'>
					<p className='text-xl font-bold'>DELETED BOOKS</p>
					<CusTable
						columns={columns}
						rows={rows}
						tableName={'deleted'}
						setCurRow={setCurRow}
						setEditBook={setEditStud}
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
			{/* <CusPrint
				rows={rows}
				columns={columns}
				module={'Students'}
			/> */}
		</div>
	);
};

export default DeletedBooksPage;
