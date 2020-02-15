module.exports = {
	roots: ['<rootDir>/'],

	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

	moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],

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
