module.exports = {
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [2, { before: false, after: true }],
    'arrow-parens': ['error', 'always'],
    'semi': ['error', 'always'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\0'],
          [
            '^[a-z]',
            '^[A-Z]',
          ],
          [
            '^@',
            '^\\w',
          ],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'prettier/prettier': ['error', {}],
    'react-refresh/only-export-components': 'warn',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-namespace': 'off',
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['dist/*'],
  env: { browser: true, es2020: true, node: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh', 'prettier', 'sort-destructure-keys', 'typescript-sort-keys', 'simple-import-sort', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended'
  ],
  parser: '@typescript-eslint/parser'
}
