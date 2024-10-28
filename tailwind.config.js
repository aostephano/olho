module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#FFF9E6', // Tint 5
          200: '#FFF2CC', // Tint 4
          300: '#FFEB99', // Tint 3
          400: '#FFE180', // Tint 2
          500: '#FFD656', // Tint 1
          600: '#FFCE34', // Shade 2
          700: '#FFC100', // Shade 3
          800: '#E6A700', // Shade 4
          900: '#CC8F00', // Shade 5
        },
        gray: {
          100: '#F5F7FA',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
