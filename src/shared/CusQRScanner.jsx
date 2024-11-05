import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { CusSecButton } from './CusButton';
const CusQRScanner = ({ setQrData, setOpenBorrowed }) => {
	const [showScanner, setShowScanner] = useState(false);

	const handleScan = (data) => {
		if (data[0].rawValue && data[0].rawValue != '') {
			setQrData(data[0].rawValue);
			setShowScanner(false);
			setOpenBorrowed(true);
		}
	};

	return (
		<div>
			<CusSecButton
				label={'SCAN QR CODE'}
				color={'header'}
				w='36'
				onClick={() => setShowScanner(true)}
			/>

			{showScanner && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
					onClick={() => setShowScanner(false)}
				>
					<div className='relative p-2 bg-white rounded-lg shadow-md w-56 h-56'>
						<div className='flex justify-center items-center w-full h-full'>
							<Scanner onScan={(result) => handleScan(result)} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CusQRScanner;
