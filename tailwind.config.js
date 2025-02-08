/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#ebebeb',
        'text-primary': '#1a1a1a',
      },
      fontFamily: {
        'roxborough': ['"roxborough-cf"', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['6rem', '1'],
        'hero-mobile': ['2rem', '1'],
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'logo-reveal': 'logoReveal 3s cubic-bezier(0.4, 0, 0.2, 1)',
        'nav-hover': 'navHover 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        logoReveal: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        navHover: {
          '0%': { transform: 'translateY(0)', opacity: '0.8' },
          '100%': { transform: 'translateY(-5px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 