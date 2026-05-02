import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
        },
        primary: '#f8fafc',
        accent: {
          cyan: '#38bdf8',
          glow: '#0ea5e9',
        },
      },
      boxShadow: {
        'glass': '0 20px 40px -10px rgba(0,0,0,0.5)',
        'glow-cyan': '0 0 20px rgba(56, 189, 248, 0.5)',
        'glow-lg': '0 0 30px rgba(56,189,248,0.2)',
      },
      borderColor: {
        'glass': 'rgba(56, 189, 248, 0.2)',
      },
      animation: {
        'float-orb': 'floatOrb 18s ease-in-out infinite',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -40px) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
