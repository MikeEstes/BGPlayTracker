module.exports = {
  extends: [
    'eslint:recommended',
    //'plugin:jsonc/recommended-with-jsonc'
  ],
  globals: {
    JSX: 'readonly',
    NodeJS: 'readonly',
    __BUNDLE_START_TIME__: 'readonly',
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@typescript0eslint/naming-convention': 'off',
      },
    },
  ],

};