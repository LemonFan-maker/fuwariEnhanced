/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
	darkMode: "class", // allows toggling dark mode manually
	theme: {
		extend: {
			fontFamily: {
				// sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
				// 字体设置可以参考这里进行抄写
				sans: [
					"LXGWWenKai",
					"Roboto",
					"sans-serif",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
