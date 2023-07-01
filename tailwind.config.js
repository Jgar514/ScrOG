/**
 *
 * @type {import('tailwindcss').Config} */
// @import "@fontsource/cormorant-garamond/500-italic.css";
// @import "@fontsource/cormorant-garamond/600-italic.css";
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["cormorant-garamond/600", "serif"],
			},
		},
		plugins: [],
	},
};
