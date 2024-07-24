/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				slideDown: {
					"0%": { transform: "translateY(-100%)", opacity: 0 },
					"100%": { transform: "translateY(0)", opacity: 1 },
				},
				slideUp: {
					"0%": { transform: "translateY(100%)", opacity: 0 },
					"100%": { transform: "translateY(0)", opacity: 1 },
				},
			},
			animation: {
				"slide-down": "slideDown 0.5s ease-out",
				"slide-up": "slideUp 0.5s ease-out",
			},
		},
	},
	plugins: [],
};
