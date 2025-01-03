/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(10deg)' },
          '66%': { transform: 'translateY(15px) rotate(-8deg)' },
        }
      }
    },
  },
  safelist: [
    {
      pattern: /^text-(indigo|purple|pink|blue|cyan)-500\/10$/,
    }
  ],
  plugins: [],
}