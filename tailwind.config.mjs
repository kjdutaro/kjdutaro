import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Source Sans 3 Variable',
          ...fontFamily.sans,
        ],
        heading: [
          'Pixelify Sans',
          'Source Sans 3 Variable',
          ...fontFamily.sans,
        ],
        pixel: [
          'Press Start 2P',
          'Pixelify Sans',
          ...fontFamily.mono,
        ],
        mono: [
          'ui-monospace',
          'Cascadia Code',
          'JetBrains Mono',
          ...fontFamily.mono,
        ],
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          muted: 'var(--accent-muted)',
        },
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
      },
      boxShadow: {
        'pixel': '4px 4px 0 0 var(--accent)',
        'pixel-sm': '2px 2px 0 0 var(--accent)',
        'pixel-border': '4px 0 0 0 var(--border-default), -4px 0 0 0 var(--border-default), 0 4px 0 0 var(--border-default), 0 -4px 0 0 var(--border-default)',
      },
      animation: {
        'blink': 'blink-cursor 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
