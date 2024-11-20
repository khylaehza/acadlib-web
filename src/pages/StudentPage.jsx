import React, { useState } from 'react';
import { SideNav } from '../layout';
import { CusTable, CusSearch, CusSort, CusPrint, CusFilter } from '../shared';
import { useData } from '../DataContext';
import { EditStudents } from '../modals';
import { useNavigate } from 'react-router-dom';
const StudentPage = () => {
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [curRow, setCurRow] = useState();
	const [showEditStud, setEditStud] = useState(false);
	const [selectedGrade, setSelectedGrade] = useState('all');

	const { students } = useData();

	const columns = [
		{ key: 'lrn', label: 'LRN No' },
		{ key: 'name', label: 'Full Name' },
		{ key: 'grade', label: 'Grade' },
		{ key: 'section', label: 'Section' },
		{ key: 'guardian', label: 'Guardian' },
		{ key: 'cnum', label: 'Contact Number' },
		{ key: 'borrowedQuan', label: 'Total Num of Borrowed Books' },
		{ key: 'created_at', label: 'Registered Date', type: 'time' },
	];
	const rows =
		students?.length > 0
			? students
					.filter((data) => {
						return (
							(curSearch.toLowerCase() === ''
								? data
								: data.name
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
					columns={columns}
					rows={rows}
					selectedGrade={selectedGrade}
					setSelectedGrade={setSelectedGrade}
				/>
				<hr className='border-body' />
				<div className='flex-1 p-6'>
					<CusTable
						columns={columns}
						rows={rows}
						tableName={'students'}
						setCurRow={setCurRow}
						setEditBook={setEditStud}
					/>
				</div>
			</div>
			{curRow && (
				<EditStudents
					curRow={curRow}
					setEditBook={setEditStud}
					showEditBook={showEditStud}
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
	const navigate = useNavigate();
	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6 w-full'>
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
				<CusFilter
					selectedGrade={selectedGrade}
					setSelectedGrade={setSelectedGrade}
					student={true}
				/>
			</div>

			<div className='flex gap-4 w-1/2 ml-auto justify-end'>
				<CusPrint
					rows={rows}
					columns={columns}
					module={'Students'}
				/>
				<button
					onClick={() => navigate('/deleted')}
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
			</div>
		</div>
	);
};

export default StudentPage;
