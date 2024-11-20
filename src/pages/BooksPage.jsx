import React, { useState } from 'react';
import { SideNav } from '../layout';
import {
	CusSearch,
	CusSort,
	CusPrint,
	CusTable,
	CusNotif,
	CusFilter,
} from '../shared';
import { AddBooks } from '../modals';
import { useData } from '../DataContext';
import { EditBooks } from '../modals';
import { useNavigate } from 'react-router-dom';
const BooksPage = () => {
	const { books } = useData();
	const [curRow, setCurRow] = useState();
	const [showEditBook, setEditBook] = useState(false);
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [selectedGrade, setSelectedGrade] = useState('all');

	const columns = [
		{ key: 'image', label: 'Image', type: 'image' },
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
		books?.length > 0
			? books
					.filter((data) => {
						return (
							(curSearch.toLowerCase() === ''
								? data
								: data.title
										.toLowerCase()
										.includes(curSearch.toLowerCase()) ||
									data.author
										.toLowerCase()
										.includes(curSearch.toLowerCase())) &&
							(selectedGrade === 'all' ||
								data.grade === selectedGrade)
						);
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
					selectedGrade={selectedGrade}
					setSelectedGrade={setSelectedGrade}
					rows={rows}
					columns={columns}
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

const Header = ({
	setCurSearch,
	curSearch,
	sortOrder,
	setSortOrder,
	rows,
	columns,
	selectedGrade,
	setSelectedGrade,
}) => {
	const filteredColumns = columns.filter((column) => column.type !== 'image');
	const navigate = useNavigate();
	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6'>
			<div className='flex gap-4 w-1/2'>
				<CusSearch
					setCurSearch={setCurSearch}
					curSearch={curSearch}
					label={'title, author'}
				/>
				<CusSort
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>

				<CusFilter
					selectedGrade={selectedGrade}
					setSelectedGrade={setSelectedGrade}
				/>
			</div>
			<div className='flex gap-4 w-1/2 justify-end'>
				<CusPrint
					rows={rows}
					columns={filteredColumns}
					module={'Books'}
				/>
				<button
					onClick={() => navigate('/deletedBooks')}
					className='bg-transparent border-black h-14'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z'
						/>
					</svg>
				</button>
				<AddBooks />
			</div>
		</div>
	);
};

export default BooksPage;
