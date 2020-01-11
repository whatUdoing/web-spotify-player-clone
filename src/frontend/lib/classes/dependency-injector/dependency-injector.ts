import { IDependencyInjector } from '../../helpers/xhr/node_modules/classes'

class DependencyInjector implements IDependencyInjector {
	dependencies: { [index: string]: {} }

	constructor() {
		this.dependencies = {}
	}

	set(name: string, dependency: object): object {
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
