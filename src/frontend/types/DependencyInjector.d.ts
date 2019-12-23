export interface IDependencyInjector {
	get: (dependency: string | FunctionConstructor) => object | void
	set: (name: string, dependency: object) => void
	has: (name: string) => boolean
}
