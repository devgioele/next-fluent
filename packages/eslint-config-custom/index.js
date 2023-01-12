module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next", "turbo", "prettier"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "eqeqeq": ['error', 'always'],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ['warn', {
      "varsIgnorePattern": '^_',
      "argsIgnorePattern": '^_',
      "caughtErrorsIgnorePattern": '^_',
      "destructuredArrayIgnorePattern": '^_',
    }],
    "no-console": "warn"
  },
};
