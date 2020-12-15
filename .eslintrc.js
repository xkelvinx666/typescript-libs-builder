const path = require('path');

module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
    'import',
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
    createDefaultProgram: true,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'arrow-parens': 'off',
    'import/newline-after-import': 'off',
    'func-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/prefer-default-export': 'off',
  },
};
