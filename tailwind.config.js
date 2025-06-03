/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2F8',
          100: '#D8E1F0',
          200: '#B1C3E1',
          300: '#8AA5D2',
          400: '#6487C3',
          500: '#3D69B4',
          600: '#0F2C59', // main primary
          700: '#0C2448',
          800: '#081836',
          900: '#040C24',
        },
        secondary: {
          50: '#FEF9E7',
          100: '#FCF3CF',
          200: '#FAE79F',
          300: '#F7DB6F',
          400: '#F5CF3F',
          500: '#F2BE22', // main accent
          600: '#D9A80F',
          700: '#A6810B',
          800: '#735A08',
          900: '#3F3204',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 30px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};