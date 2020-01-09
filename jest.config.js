module.exports = {
	roots: ['<rootDir>/'],

	moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts'],

	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},

	globals: {
		'ts-jest': {
			tsConfig: './tsconfig.test.json'
		}
	},
	preset: 'ts-jest'
}
