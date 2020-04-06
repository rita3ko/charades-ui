module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
    },
    // fontFamily: {
    //   sans: ['Segoe UI', 'Roboto', 'sans-serif'],
    // },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    colors: {
      indigo: '#0C3458',
      red: {
        default: '#BF223C',
        lighter: '#da304c',
        dark: '#a01c32',
      },
      pink: '#F7F1F8',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        seafoam: '#EFF8F3'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {},
  plugins: [
  ],
}