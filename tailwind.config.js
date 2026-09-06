/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#062F49',
          light: '#0D4467',
          dark: '#041F30',
        },
        royal: '#0B5FA5',
        sky: '#2CA6E8',
        gold: {
          DEFAULT: '#D8A83E',
          light: '#E9C877',
          dark: '#B78A28',
        },
        mist: '#F5F8FB',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -15px rgba(6, 47, 73, 0.25)',
        card: '0 10px 30px -10px rgba(6, 47, 73, 0.18)',
        gold: '0 10px 25px -8px rgba(216, 168, 62, 0.45)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(160deg, #062F49 0%, #0B5FA5 100%)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
