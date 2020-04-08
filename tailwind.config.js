module.exports = {
  theme: {
    screens: {
      sm: {max: '640px'},
      md: {max: '768px'},
      lg: {max: '1024px'},
      xl: {max: '1280px'},
    },
    container: {
      center: true,
    },
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
      blue: "#3182CE",
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