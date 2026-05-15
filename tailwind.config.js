/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A8C',
          dark: '#0a1f4d',
          mid: '#162f73'
        },
        teal: {
          DEFAULT: '#00B89F',
          dark: '#009984',
          light: '#e6f9f6'
        },
        offwhite: '#F8FAFD',
        ink: '#111827',
        muted: '#6B7280',
        line: '#E5E7EB'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        serif: ['ui-serif', 'Georgia', 'serif']
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        wider: '0.12em',
        widest: '0.18em'
      },
      boxShadow: {
        card: '0 4px 24px rgba(27,58,140,0.06), 0 1px 4px rgba(0,0,0,0.03)',
        cardHover: '0 16px 40px rgba(27,58,140,0.10), 0 4px 12px rgba(0,0,0,0.04)',
        float: '0 24px 60px rgba(27,58,140,0.08), 0 6px 16px rgba(0,0,0,0.03)'
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '14px',
        xl: '18px'
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
