import { IDependencyInjector } from 'classes'

class DependencyInjector implements IDependencyInjector<object> {
	dependencies: { [index: string]: {} }

	constructor() {
		this.dependencies = {}
	}

	remove(name: string) {
		if (this.has(name)) {
			return Reflect.deleteProperty(this.dependencies, name)
		}

		throw Error('Dependency does not exist')
	}

	set(name: string, dependency: object): object {
		if (this.has(name)) {
			throw Error('Dependency with provided name already exists')
		}

		return (this.dependencies[name] = dependency)
	}

	get(name: string | FunctionConstructor): object | undefined {
		if (typeof name === 'string') {
			if (this.has(name)) {
				return this.dependencies[name]
			}
		}

		if (typeof name === 'function') {
			return this.set(name.name, name)
		}
	}

	has(name: string): boolean {
		return !!this.dependencies[name]
	}
}

export const Container = new DependencyInjector()
