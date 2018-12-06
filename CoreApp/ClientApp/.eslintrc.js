module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/airbnb',
	],
	rules: {
		"vue/html-indent": ["error", "tab", {
			"attribute": 1,
			"closeBracket": 0,
			"alignAttributesVertically": false,
			"ignores": []
		}],
		'vue/html-self-closing': 'off',
		'vue/name-property-casing': 'off',
		'vue/max-attributes-per-line': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		"no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
		"comma-dangle": ["error", "never"],
		"indent": ["error", "tab"],
		'no-tabs': 'off',
		'quotes': ["error", "single"],
		'max-len': 'off',
		'linebreak-style': 'off',
		'import/no-unresolved': 'off',
		'spaced-comment': 'off',
		'object-shorthand': 'off',
		'func-names': 'off',
		'space-before-function-paren': 'off',
		'no-trailing-spaces': 'off',
		'import/prefer-default-export': 'off',
		'padded-blocks': 'off',
		'arrow-parens': 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
};
