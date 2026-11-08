/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          dark: '#000000',
          darker: '#050508',
          card: 'rgba(18, 18, 22, 0.65)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.12)',
          blue: '#2997ff',
          cyan: '#00f2fe',
          purple: '#af52de',
          emerald: '#30d158',
          amber: '#ff9f0a',
          coral: '#ff453a',
          textMuted: '#86868b',
          textSecondary: '#a1a1a6'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'sans-serif'
        ],
        mono: [
          '"SF Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      boxShadow: {
        'apple-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'apple-glow': '0 0 50px -10px rgba(41, 151, 255, 0.25)',
        'apple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
      },
      backdropBlur: {
        'apple': '20px'
      }
    },
  },
  plugins: [],
}
