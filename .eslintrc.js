module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: "@typescript-eslint/parser",
	plugins: ["react", "eslint-plugin-react"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		"no-unused-vars": 0,
		"no-undef": 2
	}
};
