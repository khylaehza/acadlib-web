import React from 'react';
import { SideNav } from '../layout';
import { CusTable } from '../shared';
import { useData } from '../DataContext';
const DashboardPage = () => {
	const { students, borrowed } = useData();
	const columns = [
		{ key: 'image', label: 'Student', type: 'image' },
		{ key: 'image', label: 'Title', type: 'image' },
		{ key: 'cn', label: 'Author' },
		{ key: 'title', label: 'Borrowed Date' },
		{ key: 'author', label: 'Return Date' },
		{ key: 'qty', label: 'Days Due' },
	];

	const rows = [];
	return (
		<div className='flex font-montserrat'>
			<SideNav />
			<div className='flex flex-1 flex-col bg-white text-black'>
				<Header />
				<hr className='border-body' />
				<div className='flex-1 p-6 gap-12'>
					<div className='flex flex-row p-8'>
						<div className='text-black grid grid-cols-3 gap-3 w-full justify-between'>
							<div className='bg-body p-8 rounded-xl shadow-xl'>
								<div className='flex flex-col text-center '>
									<p className='text-xl'>BORROWED</p>
									<p className='text-3xl font-bold'>
										{borrowed?.length}
									</p>
								</div>
							</div>
							<div className='bg-body p-8 rounded-xl shadow-xl'>
								<div className='flex flex-col text-center '>
									<p className='text-xl'>OVERDUE</p>
									<p className='text-3xl font-bold'>6</p>
								</div>
							</div>
							<div className='bg-body p-8 rounded-xl shadow-xl'>
								<div className='flex flex-col text-center '>
									<p className='text-xl'>STUDENTS</p>
									<p className='text-3xl font-bold'>
										{students?.length}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>Overdue Book Loans</div>
					<CusTable
						columns={columns}
						rows={rows}
						tableName={'overdue'}
					/>

					<div>Today's Return Book</div>
					<CusTable
						columns={columns}
						rows={rows}
						tableName={'overdue'}
					/>
				</div>
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<div className='h-24 bg-header shadow-xl flex items-center justify-between gap-6 p-6 '>
			<div className='text-lg font-bold'>Dashboard</div>
		</div>
	);
};
export default DashboardPage;
