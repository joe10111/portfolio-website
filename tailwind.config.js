/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    scale: {
      '175': '1.75',
    },
    screens: {
      sm: "480px",
      md: "768",
      lg: "976",
      xl: "1440px" 
    },
    extend: {
      fontFamily: {
        'sans': ['Oswald'],
      },
      colors : {
        whiteGrey: "#e2e8f0",
      }
    },
  },
  plugins: [],
}
