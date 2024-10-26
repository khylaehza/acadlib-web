/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: { montserrat: ['Montserrat', 'sans-serif'] },
		extend: {
			backgroundImage: {
				'gradient-custom':
					'linear-gradient(180deg, #EDFF21 0%, #00AE1F 100%)',
			},
			colors: {
				primary: '#EDFF21',
				background: '#00AE1F',
				body: '#cee5d2',
				header: '#d1cb27',
			},
		},
	},
	plugins: [],
};
