module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-indent': ['error', 2],
    'react/display-name': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'default-case': 0,
    'space-before-blocks': 'error',
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: ['import'], next: '*' },
      {
        blankLine: 'any',
        prev: ['import'],
        next: ['import'],
      },
      { blankLine: 'always', prev: '*', next: ['export'] },
      {
        blankLine: 'any',
        prev: ['export'],
        next: ['export'],
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
  },
  settings: {
    'import/resolver': 'parcel',
  },
};
