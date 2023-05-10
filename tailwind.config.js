const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        Hanken: ['Hanken','Grotesk', 'sans-serif'],
      
      },
    },
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    colors: {
      Primary:{
        Lightred: {
          '50': '#fff1f1',
          '100': '#ffe1e1',
          '200': '#ffc7c7',
          '300': '#ffa0a0',
          '400': '#ff5757',
          '500': '#f83b3b',
          '600': '#e51d1d',
          '700': '#c11414',
          '800': '#a01414',
          '900': '#841818',
          '950': '#480707',
        },
        OrangeyYellow: {
          '50': '#fffaeb',
          '100': '#fff0c6',
          '200': '#ffde88',
          '300': '#ffc84a',
          '400': '#ffb01f',
          '500': '#f98d07',
          '600': '#dd6702',
          '700': '#b74606',
          '800': '#94350c',
          '900': '#7a2c0d',
          '950': '#461502',
        },
        GreenTeal: {
          '50': '#eafff7',
          '100': '#cdfeea',
          '200': '#a0fada',
          '300': '#63f2c7',
          '400': '#25e2b0',
          '500': '#00bd91',
          '600': '#00a47e',
          '700': '#008369',
          '800': '#006754',
          '900': '#005546',
          '950': '#003029',
        },
        CobaltBlue: {
          '50': '#f2f6ff',
          '100': '#e7edff',
          '200': '#d3dfff',
          '300': '#afc2ff',
          '400': '#829bff',
          '500': '#4f68ff',
          '600': '#2b3dfc',
          '700': '#1926e8',
          '800': '#1622d0',
          '900': '#131c9f',
          '950': '#09136c',
        }
      },
      Gradients:{
        Lightslateblue:"hsl(252, 100%, 67%)",
        Lightroyalblue :"hsl(241, 81%, 54%)",
        Violetblue :"hsla(256, 72%, 46%, 1)",
        Persianblue:"hsla(241, 72%, 46%, 0)",
      },
      Neutral:{
        White:"hsl(0, 0%, 100%)",
        Paleblue:"hsl(221, 100%, 96%)",
        Lightlavender:"hsl(241, 100%, 89%)",
        Darkgrayblue:"hsl(224, 30%, 27%)"
      }
    },
    

  },
  variants: {},
  plugins: []
};
