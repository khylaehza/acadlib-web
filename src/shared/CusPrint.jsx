import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const CusPrint = ({ rows, columns, module, h = 14, s = 6 }) => {
	const generatePdf = () => {
		const doc = new jsPDF({ orientation: 'landscape' });
		doc.autoTable({
			head: [columns.map((column) => column.label)],
			body: rows.map((row) => columns.map((column) => row[column.key])),
			startY: 20,
			styles: { overflow: 'linebreak' },
			didDrawPage: () => {
				doc.text(`${module}`, 10, 10);
			},
		});
		doc.save(`${module}.pdf`);
	};

	const handleDlClick = () => {
		generatePdf();
	};

	return (
		<button
			onClick={() => handleDlClick()}
			className={`bg-transparent border-black h-${h}`}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className={`size-${s}`}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
				/>
			</svg>
		</button>
	);
};

export default CusPrint;
