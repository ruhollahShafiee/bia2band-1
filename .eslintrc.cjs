module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "no-unused-vars": "warn",
    "react/prop-types": "off",
  },
};

// module.exports = {
// 	root: true,
// 	env: { browser: true, es2020: true },
// 	ignorePatterns: ["dist", ".eslintrc.cjs"],
// 	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
// 	settings: { react: { version: "18.2" } },
// 	plugins: ["react-refresh"],
// 	extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
// 	rules: {
// 		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
// 		eqeqeq: "error",
// 		"no-undef": "error",
// 		"no-unused-vars": "warn",
// 	},
// 	parserOptions: {
// 		ecmaFeatures: {
// 			jsx: true,
// 		},
// 		ecmaVersion: "latest",
// 		sourceType: "module",
// 	},
// };
