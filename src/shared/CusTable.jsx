import CusImgViewer from './CusImgViewer';
import { useState } from 'react';
import { useData } from '../DataContext';

const CusTable = ({ columns, rows, tableName, setCurRow, setEditBook }) => {
	const [img, setImg] = useState('');
	const [openImg, setOpenImg] = useState(false);
	const { deleteItem } = useData();

	const onEdit = (row) => {
		setCurRow(row);
		setEditBook(true);
	};

	const onDelete = (row) => {
		const itemId = row.key;
		const imageUrl = row.image ? row.image : null;

		deleteItem(itemId, tableName, imageUrl);
	};
	return (
		<div
			className='overflow-x-auto overflow-y-auto'
			style={{ maxHeight: '80vh', maxWidth: '100%' }}
		>
			<table className='table-fixed w-full'>
				<thead>
					<tr className=''>
						{columns.map((col, ind) => (
							<th
								key={ind}
								className='p-2 text-left text-sm'
							>
								{col.label}
							</th>
						))}
						<th className=' p-2 text-left text-sm'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(rows).length == 0 ? (
						<tr className='text-center text-xs p-8 mt-5'>
							<td colSpan={columns.length}>
								No data available here.
							</td>
						</tr>
					) : (
						<>
							{rows.map((row, index) => (
								<tr
									key={index}
									className={`${
										index === 0
											? 'bg-body/[.4]'
											: index % 2 === 1
												? 'bg-white'
												: 'bg-body/[.4]'
									} hover:bg-body text-xs`}
								>
									{columns.map((col, colIndex) => (
										<td
											key={colIndex}
											className='w-full p-2'
										>
											{col.type === 'image' ? (
												<>
													<img
														src={row[col.key]}
														alt={`${col.label}`}
														className='w-15 h-15 object-cover cursor-pointer'
														onClick={() => {
															setOpenImg(true);
															setImg(
																row[col.key]
															);
														}}
													/>
													{/* {col.key == 'key' ? (
														<img
															size={256}
															style={{
																height: 'auto',
																maxWidth:
																	'100%',
																width: '100%',
															}}
															value={'value'}
															viewBox={`0 0 256 256`}
															onClick={() => {
																setOpenImg(
																	true
																);
																setImg(
																	row[col.key]
																);
															}}
															className='cursor-pointer'
														/>
													) : (
														<img
															src={row[col.key]}
															alt={`${col.label}`}
															className='w-15 h-15 object-cover'
														/>
													)} */}
												</>
											) : (
												row[col.key]
											)}
										</td>
									))}
									<td className='text-xs p-2'>
										<div className='flex flex-col gap-2 justify-center'>
											<button
												onClick={() => onEdit(row)}
												className='bg-yellow-200 p-2 rounded-full hover:bg-yellow-300 flex flex-row gap-1 items-center'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-3 w-3'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth='2'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M15.232 5.232l3.536 3.536M16.732 2.732a2.828 2.828 0 114 4l-12 12-4.5 1.5 1.5-4.5 12-12z'
													/>
												</svg>
												Edit
											</button>
											<button
												onClick={() => onDelete(row)}
												className='bg-red-200 p-2 rounded-full hover:bg-red-300 flex flex-row gap-1 items-center'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-3 w-3'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth='2'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
												Del
											</button>
										</div>
									</td>
								</tr>
							))}
						</>
					)}
				</tbody>
			</table>
			<CusImgViewer
				src={img}
				alt={img}
				openImage={openImg}
				setOpenImage={setOpenImg}
			/>
		</div>
	);
};
export default CusTable;
