const CusImgViewer = ({ src, alt, setOpenImage, openImage }) => {
	return (
		<>
			{openImage && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
					onClick={() => setOpenImage(false)}
				>
					<div className='relative p-2 bg-white rounded-lg shadow-md '>
						<div className='flex justify-center items-center h-full'>
							{/* <QRCode
								size={256}
								className='rounded-lg object-cover'
								style={{ width: '100%', height: '100%' }}
								value={src}
								viewBox={`0 0 256 256`}
							/> */}
							<img
								src={src}
								alt={alt}
								style={{ borderRadius: 9, objectFit: 'cover' }}
								width={'100%'}
								height={'auto'}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CusImgViewer;
