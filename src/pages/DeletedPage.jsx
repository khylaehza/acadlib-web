import React, { useState } from 'react';
import { SideNav } from '../layout';
import { CusTable, CusSearch, CusSort, CusPrint } from '../shared';
import { useData } from '../DataContext';
import { EditStudents } from '../modals';

const DeletedPage = () => {
	const [curSearch, setCurSearch] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [curRow, setCurRow] = useState();
	const [showEditStud, setEditStud] = useState(false);

	const { deleted } = useData();

	const columns = [
		{ key: 'lrn', label: 'LRN No' },
		{ key: 'name', label: 'Full Name' },
		{ key: 'grade', label: 'Grade' },
		{ key: 'section', label: 'Section' },
		{ key: 'guardian', label: 'Guardian' },
		{ key: 'cnum', label: 'Contact Number' },
	];

	const rows =
		deleted?.length > 0
			? deleted
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
					columns={columns}
					rows={rows}
				/>
				<hr className='border-body' />

				<div className='flex-1 p-6'>
					<p className='text-xl font-bold'>DELETED STUDENTS</p>
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

export default DeletedPage;
