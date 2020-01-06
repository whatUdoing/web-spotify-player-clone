/**
 * Observer
 */

export interface IObserver {
	subscribe(event: IEvent, callback: EventCallback): void
	dispatch(event: IEvent, async: boolean): void
}

export type IEvent = {
	name: string
}

export type EventCallback = (event: EventObject) => void

export type EventObject = {
	event: IEvent
	payload?: any
}

/**
 * Dependency Injector
 */

export interface IDependencyInjector {
	get: (dependency: string | FunctionConstructor) => object | void
	set: (name: string, dependency: object) => void
	has: (name: string) => boolean
}

/**
 * Cache Manager
 */

export type CacheItem<T> = {
	data: T
	cachedTime: number
	expiresIn: number // number of second
	expiresTime: number // basicly cachedTime + expiresIn * 1000
}

export type CacheSettings = {
	expiresIn: number // number of seconds within which value expires
}

export interface ICacheManager<T> {
	add(key: string, value: T, settings?: CacheSettings): boolean | Error
	remove(key: string): boolean | Error
	has(key: string): boolean
	hasExpired(item: CacheItem<T>): boolean
	get(key: string): CacheItem<T> | null
}
