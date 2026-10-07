/** @type {import('tailwindcss').Config} */

// Colors are CSS variables (defined in src/index.css) so the whole site
// switches between light and dark by toggling the `dark` class on <html>.
const c = (v) => `rgb(var(${v}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: c('--ink-950'),
          900: c('--ink-900'),
          800: c('--ink-800'),
          700: c('--ink-700'),
          600: c('--ink-600'),
        },
        fg: c('--fg'),
        fg2: c('--fg2'),
        fg3: c('--fg3'),
        fg4: c('--fg4'),
        fg5: c('--fg5'),
        accent: {
          DEFAULT: c('--accent'),
          soft: c('--accent-soft'),
        },
        'on-accent': c('--on-accent'),
        sky2: c('--sky'),
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        flow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 24px' },
        },
        flowx: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '24px 0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        flow: 'flow 1.2s linear infinite',
        flowx: 'flowx 1.2s linear infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
