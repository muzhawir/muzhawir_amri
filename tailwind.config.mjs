/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['serif'],
			mono: ['JetBrains Mono', 'monospace'],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require('daisyui')
	],
	daisyui: {
		themes: ["corporate", "business"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
	},
}
