module.exports = {
  plugins: ['import', 'prettier', 'eslint-comments', 'jest'],
  extends: [
    'eslint:recommended',
    'airbnb/base',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 2,
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'sort-imports': [2, { ignoreDeclarationSort: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'airbnb-typescript/base',
        'prettier',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'sort-imports': [2, { ignoreDeclarationSort: true }],
        'import/no-cycle': 'off',
      },
    },
  ],
};
