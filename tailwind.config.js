/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/*.jsx',
    './src/*.js',
    'index.html',
  ],
  theme: {
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      default: 'var(--color-text-default)',
      'default-soft': 'var(--color-text-default-soft)',
      inverse: 'var(--color-text-inverse)',
      'inverse-soft': 'var(--color-text-inverse-soft)',
    },
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      'primary-soft': 'var(--color-bg-primary-soft)',
      secondary: 'var(--color-bg-secondary)',
      'secondary-soft': 'var(--color-bg-secondary-soft)',
      default: 'var(--color-bg-default)',
      'default-soft': 'var(--color-bg-default-soft)',
      inverse: 'var(--color-bg-inverse)',
      transparent: 'transparent',
    },
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-body)',
    },
    extend: {
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        display: 'var(--font-weight-display)',
        btn: 'var(--font-weight-btn)',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        72: '18rem',
        80: '20rem',
      },
    },
    customForms: (theme) => ({
      default: {
        'select, radio, textarea, input, checkbox': {
          '&:focus': {
            borderColor: theme('colors.gray.400'),
            boxShadow: 'none',
          },
          // backgroundColor: 'var(--color-bg-default-soft)',
          backgroundColor: theme('backgroundColor.default-soft'),
        },
      },
      // dark: {
      //   'select, radio, textarea, input, checkbox': {
      //     lineHeight: theme('lineHeight.snug'),
      //     borderColor: 'transparent',
      //     color: theme('colors.white'),
      //     borderRadius: theme('borderRadius.lg'),
      //     backgroundColor: theme('colors.gray.700'),
      //   },
      //   radio: {
      //     backgroundColor: theme('colors.gray.900'),
      //     borderRadius: theme('borderRadius.full'),
      //   },
      //   checkbox: {
      //     backgroundColor: theme('colors.gray.900'),
      //   },
      // },
    }),
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    outline: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
};
