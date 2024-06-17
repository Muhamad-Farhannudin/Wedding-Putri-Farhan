/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        elsie: ['var(--font-elsie)'],
        waterfall: ['var(--font-waterfall)'],
        rochester: ['var(--font-rochester)'],
      },
      colors: {
        'blue-denim': '#a2b0ca',
      },
    },
  },
  plugins: [],
}