import React from 'react';
import { SideNav } from '../layout';
import { CusTable, CusPrint } from '../shared';
import { useData } from '../DataContext';
import moment from 'moment';

const DashboardPage = () => {
	const { students, borrowed, books, history } = useData();

	const columns = [
		{ key: 'name', label: 'Borrower' },
		{ key: 'title', label: 'Title' },
		{ key: 'author', label: 'Author' },
		{ key: 'sdate', label: 'Borrowed Date', type: 'time' },
		{ key: 'edate', label: 'End Date', type: 'time' },
	];
	const columnsH = [
		{ key: 'name', label: 'Borrower' },
		{ key: 'title', label: 'Title' },
		{ key: 'author', label: 'Author' },
		{ key: 'sdate', label: 'Borrowed Date', type: 'time' },
		{ key: 'edate', label: 'End Date', type: 'time' },
		{ key: 'rdate', label: 'Return Date', type: 'time' },
	];

	const overdueBooks = borrowed
		.map((item) => {
			const student = students?.find(
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
		.filter((b) => {
			const endDate = moment(b.edate);
			return endDate.isBefore(moment());
		});

	const historyBooks = history.filter((h) => {
		const returnDate = moment(h.rdate);
		return returnDate.isSame(moment(), 'day');
	});

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
									<p className='text-3xl font-bold'>
										{overdueBooks.length}
									</p>
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

					<div className='flex flex-row align-center items-center gap-4'>
						<div className='text-lg font-bold'>
							OVERDUE BOOK LOANS
						</div>
						<CusPrint
							rows={overdueBooks}
							columns={columns}
							module={'Overdue Book Loans'}
							// s={6}
							// h={8}
						/>
					</div>

					<div className='flex flex-col gap-10'>
						<CusTable
							columns={columns}
							rows={overdueBooks}
							action={false}
						/>

						<hr />
						<div>
							<div className='flex flex-row align-center items-center gap-4'>
								<div className='text-lg font-bold'>
									TODAY'S RETURN BOOKS
								</div>
								<CusPrint
									rows={historyBooks}
									columns={columnsH}
									module={"Today's Return Books"}
									// s={6}
									// h={8}
								/>
							</div>

							<CusTable
								columns={columnsH}
								rows={historyBooks}
								action={false}
							/>
						</div>
					</div>
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
