export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fiber: {
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1e40af',
          glow: '#60a5fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)' },
          '50%': { opacity: 1, boxShadow: '0 0 40px rgba(37, 99, 235, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
