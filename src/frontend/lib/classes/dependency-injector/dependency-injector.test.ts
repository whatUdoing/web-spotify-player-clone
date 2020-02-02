import { Container } from './dependency-injector'

type DependencyItem = {
	name: string
	value: number
}
let testDependencies: Array<DependencyItem> = []

const getTestDependency = (dependency: DependencyItem) => {
	return testDependencies.filter(dep => dep === dependency)[0]
}

beforeEach(() => {
	Container.dependencies = {}

	testDependencies = [
		{
			name: 'dependency-1',
			value: 1
		},
		{
			name: 'dependency-2',
			value: 2
		},
		{
			name: 'dependency-3',
			value: 3
		},
		{
			name: 'dependency-4',
			value: 4
		}
	]
})

describe('[ dependencyInjector ] adding dependencies', () => {
	it('should add dependency to dependencies list', () => {
		const dependency = testDependencies[0]

		Container.set(dependency.name, dependency)

		expect(Object.keys(Container.dependencies)).toHaveLength(1)
	})

	test('if we can add multiple dependencies', () => {
		testDependencies.forEach(dependency => {
			Container.set(dependency.name, dependency)
		})

		expect(Object.keys(Container.dependencies)).toHaveLength(
			testDependencies.length
		)

		testDependencies.forEach(dependency => {
			expect(Container.get(dependency.name)).toBe(dependency)
		})
	})

	it('should throw an error if we prvided dependency with the same name twice', () => {
		const dependency1 = testDependencies[0]
		const dependency2 = testDependencies[1]

		Container.set(dependency1.name, dependency1)

		expect(() => Container.set(dependency1.name, dependency2)).toThrowError(
			'Dependency with provided name already exists'
		)
	})
})

describe('[ dependencyInjector ] getting dependencies', () => {
	it('should return true for previously added dependency', () => {
		const dependency = testDependencies[0]

		Container.set(dependency.name, dependency)

		expect(Container.get(dependency.name)).toBe(dependency)
	})

	test('if Container returns all added dependencies', () => {
		testDependencies.forEach(dependency => {
			Container.set(dependency.name, dependency)
		})

		testDependencies.forEach(dependency => {
			expect(getTestDependency(dependency)).toBe(
				Container.get(dependency.name)
			)
		})
	})

	it('should return undefined for dependency that doesnt exist', () => {
		const dependency = testDependencies[0]

		expect(Container.get(dependency.name)).toBeUndefined()
	})
})

describe('[ dependencyInjector ] removing dependencies', () => {
	it('should remove previusly added dependency', () => {
		const dependency = testDependencies[0]

		Container.set(dependency.name, dependency)

		expect(Object.keys(Container.dependencies)).toHaveLength(1)
		expect(Container.remove(dependency.name)).toBeTruthy()
		expect(Object.keys(Container.dependencies)).toHaveLength(0)
	})

	it('should throw an error if we want to remove dependency that doesnt exist', () => {
		expect(() =>
			Container.remove('some dependency that doesnt exist')
		).toThrowError('Dependency does not exist')
	})
})

describe('[ dependencyInjector ] checking dependencies', () => {
	it('should return true for dependency that already exists', () => {
		const dependency = testDependencies[0]

		Container.set(dependency.name, dependency)

		expect(Container.has(dependency.name)).toBeTruthy()
	})

	it('should return false for dependency that doesnt exist', () => {
		const dependency = testDependencies[0]

		expect(Container.has(dependency.name)).toBeFalsy()
	})
})
