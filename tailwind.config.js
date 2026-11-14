/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FB7319',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#FB7319',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          dark: '#E05D07',
        },
        ink: {
          950: '#0A0A0A',
          900: '#121212',
          800: '#1F1F1F',
          700: '#2E2E2E',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'glow-orange': '0 0 25px -5px rgba(251, 115, 25, 0.35)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      }
    },
  },
  plugins: [],
}
