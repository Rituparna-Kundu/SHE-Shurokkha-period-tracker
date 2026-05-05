/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        accent: 'var(--accent)',
        'bg-main': 'var(--bg-main)',
        'bg-soft': 'var(--bg-soft)',
        'text-dark': 'var(--text-dark)',
        'text-mid': 'var(--text-mid)',
        'text-soft': 'var(--text-soft)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        'card-bg': 'var(--card-bg)',
        border: 'var(--border)',
      },
      fontFamily: {
        heading: ['"Hind Siliguri"', 'sans-serif'],
        body: ['"Noto Sans Bengali"', 'sans-serif'],
        ui: ['"DM Sans"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}
