module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"space-in-parens": [
			"error",
			"always"
		],
		"template-curly-spacing": [
			"error",
			"always"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"react/jsx-curly-spacing": [
			"error",
			"always"
		],
		"eol-last": [
			"error",
			"always"
		]
	}
};
