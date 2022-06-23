module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-inner-declarations': 'warn',
    'block-scoped-var': 'error',
    'default-case': 'error',
    'no-caller': 'error',
    'no-eval': 'error',
    'comma-dangle': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        comments: 80
      }
    ],
    semi: ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}
