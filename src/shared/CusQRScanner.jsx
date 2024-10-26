import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { CusSecButton } from './CusButton';
import CusImgViewer from './CusImgViewer';
const CusQRScanner = () => {
	const [showScanner, setShowScanner] = useState(false);
	const [qrData, setQrData] = useState(null);

	const handleScan = (data) => {
		if (data) {
			setQrData(data);
			setShowScanner(false);
		}
	};

	const handleError = (err) => {
		console.error(err);
	};

	return (
		<div>
			<CusSecButton
				label={'SCAN TO BOOK'}
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
							<Scanner
								onScan={(result) => handleScan(result)}
								// style={{ width: '300px' }}
							/>
						</div>
					</div>
				</div>
			)}

			{qrData && <p>Scanned QR Data: {qrData}</p>}
		</div>
	);
};

export default CusQRScanner;
