/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#272732',
				secondary: '#2B2D38',
				inputclr: '#23252F',
				borderclr: '#464856'
			}
		}
	},

	plugins: []
};
