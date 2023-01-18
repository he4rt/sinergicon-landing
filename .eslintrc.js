module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json",
    ecmaVersion: "2020"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        createDefaultProgram: true,
      },
    },
  ],
    "plugins": [
    "@typescript-eslint/eslint-plugin",
     "prettier",
    ],

  rules: {
    "prettier/prettier": "error",
    "import/order": "off",
    "func-style": "off",
    "@typescript-eslint/no-misused-promises": "off",
    // too much false positives
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",

    // disabled by now, because this conflicts with css-modules
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
  },
};
