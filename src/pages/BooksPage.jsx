import React, { useState } from 'react';
import { SideNav } from '../layout';
import {
	CusSearch,
	CusSort,
	CusSecButton,
	CusTable,
	CusNotif,
} from '../shared';
import { AddBooks } from '../modals';
import { useData } from '../DataContext';
import { EditBooks } from '../modals';
const BooksPage = () => {
	const { books } = useData();
	const [curRow, setCurRow] = useState();
	const [showEditBook, setEditBook] = useState(false);
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	const columns = [
		{ key: 'image', label: 'Image', type: 'image' },
		{ key: 'cn', label: 'CN' },
		{ key: 'title', label: 'Title' },
		{ key: 'author', label: 'Author' },
		{ key: 'qty', label: 'Qty' },
		{ key: 'edition', label: 'Edition' },
		{ key: 'vol', label: 'Volume' },
		{ key: 'page', label: 'Pages' },
		{ key: 'date', label: 'Date' },
		{ key: 'isbn', label: 'ISBN' },
		{ key: 'place', label: 'Place' },
		{ key: 'publisher', label: 'Publisher' },
	];

	const rows =
		books?.length > 0
			? books
					.filter((data) => {
						return curSearch.toLowerCase() === ''
							? data
							: data.title
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
						tableName={'books'}
						setCurRow={setCurRow}
						setEditBook={setEditBook}
					/>
				</div>
			</div>
			<CusNotif />
			{curRow && (
				<EditBooks
					curRow={curRow}
					setEditBook={setEditBook}
					showEditBook={showEditBook}
				/>
			)}
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
				<AddBooks />
			</div>
		</div>
	);
};
export default BooksPage;
