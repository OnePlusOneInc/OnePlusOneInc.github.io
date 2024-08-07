/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			geist: ['Geist', 'sans-serif']
		},
		extend: {
			letterSpacing: {
				logo: '-3.5px'
			},
			backgroundColor: {
				hero: '#111113',
				primary: {
					light: '#FFFAF4',
					dark: '#1D1D20'
				},
				secondary: {
					light: '#FFF6EB',
					dark: '#242428'
				}
			},
			textColor: {
				primary: {
					dark: '#FFFAF4',
					light: '#1D1D20'
				},
				secondary: {
					dark: '#94928F',
					light: '#1D1D20'
				}
			},
			colors: {
				'opo-orange': '#FF5C00',
				'opo-red': '#DE1E45',
				'primary-light': '#FFFAF4',
				'primary-dark': '#1D1D20'
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in forwards'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0, transform: 'translate(0, 20px)' },
					'100%': { opacity: 1, transofrm: 'translate(0, -20px)' }
				}
			}
		}
	},
	plugins: []
};
