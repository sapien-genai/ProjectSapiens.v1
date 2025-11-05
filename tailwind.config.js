export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4f8',
          100: '#d1e9f1',
          200: '#a3d3e3',
          300: '#75bdd5',
          400: '#47a7c7',
          500: '#1976d2',
          600: '#1565c0',
          700: '#0d47a1',
          800: '#0a3981',
          900: '#072b61',
        },
        secondary: {
          50: '#fff3e0',
          100: '#ffe7c1',
          200: '#ffcf83',
          300: '#ffb745',
          400: '#ff9f07',
          500: '#f57c00',
          600: '#e65100',
          700: '#c43e00',
          800: '#a23300',
          900: '#802800',
        },
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        success: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          500: '#4caf50',
          600: '#43a047',
        },
        warning: {
          50: '#fff3e0',
          100: '#ffe7c1',
          500: '#ff9800',
          600: '#f57c00',
        },
        error: {
          50: '#ffebee',
          100: '#ffcdd2',
          500: '#f44336',
          600: '#e53935',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
