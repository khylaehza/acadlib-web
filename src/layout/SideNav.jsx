import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const SideNav = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div className='w-64 h-screen bg-background text-white flex flex-col p-12 justify-between shadow-2xl'>
			<div className='flex flex-col items-center gap-4'>
				<img
					src='./logo.png'
					className=''
				/>
				<img
					src='./name.png'
					className='items-center'
				/>
			</div>
			<nav>
				<ul className='font-medium font-montserrat'>
					<li
						className='p-2 hover:bg-primary hover:text-black hover:cursor-pointer flex flex-row gap-2'
						onClick={() => navigate('/dashboard')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill={
								location.pathname == '/dashboard'
									? 'white'
									: 'none'
							}
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z'
							/>
						</svg>
						Dashboard
					</li>
					<li
						className='p-2 hover:bg-primary hover:text-black hover:cursor-pointer flex flex-row gap-2'
						onClick={() => navigate('/loan')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill={
								location.pathname == '/loan' ? 'white' : 'none'
							}
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
							/>
						</svg>
						Library Loan
					</li>
					<li
						className='p-2 hover:bg-primary hover:text-black hover:cursor-pointer flex flex-row gap-2'
						onClick={() => navigate('/books')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill={
								location.pathname == '/books' ? 'white' : 'none'
							}
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
							/>
						</svg>
						Books
					</li>
					<li
						className='p-2 hover:bg-primary hover:text-black hover:cursor-pointer flex flex-row gap-2'
						onClick={() => navigate('/students')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill={
								location.pathname == '/students'
									? 'white'
									: 'none'
							}
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
							/>
						</svg>
						Students
					</li>
					<li
						className='p-2 hover:bg-primary hover:text-black hover:cursor-pointer flex flex-row gap-2'
						onClick={() => navigate('/history')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill={
								location.pathname == '/history'
									? 'white'
									: 'none'
							}
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='size-6'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
							/>
						</svg>
						History
					</li>
				</ul>
			</nav>
			<div className='flex items-center justify-center w-full'>
				<button
					className='w-full bg-black/[0.3]'
					onClick={() => navigate('/')}
				>
					LOG OUT
				</button>
			</div>
		</div>
	);
};

export default SideNav;
