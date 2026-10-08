/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        folex: {
          yellow: '#ccff00',
          yellowHover: '#b8e600',
          dark: '#000000',
          card: '#f4f4f4',
          border: '#e5e5e5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Syne"', '"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}