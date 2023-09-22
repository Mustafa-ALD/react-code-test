module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:react/recommended',
      'prettier'
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json'
    },
    plugins: [
      'react'
    ],
    'rules': {
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/comma-dangle': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/space-before-function-paren': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      'object-shorthand': 0,
    }
  }
  