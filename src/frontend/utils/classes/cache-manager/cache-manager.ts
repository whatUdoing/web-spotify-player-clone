import { ICacheManager, CacheSettings, CacheItem } from 'classes'

export default class CacheManager<T> implements ICacheManager<T> {
	storage: Record<string, CacheItem<T>>

	static defaultCacheTime: 60

	constructor() {
		this.storage = Object.create(null)
	}

	add(key: string, value: T, settings?: CacheSettings): boolean | Error {
		let valueExists = this.has(key)

		if (valueExists && this.hasExpired(this.storage[key])) {
			this.remove(key)

			valueExists = this.has(key)
		}

		if (!this.has(key)) {
			const cachedTime = Date.now()
			const expiresIn =
				settings?.expiresIn ?? CacheManager.defaultCacheTime

			this.storage[key] = {
				data: value,
				expiresIn,
				cachedTime,
				expiresTime: cachedTime + expiresIn * 1000
			}

			return true
		}

		throw Error('Value with privded key already exists')
	}

	get(key: string): CacheItem<T> | null {
		if (this.has(key)) {
			return this.storage[key]
		}

		return null
	}

	remove(key: string): boolean | Error {
		if (this.has(key)) {
			return Reflect.deleteProperty(this.storage, key)
		}

		throw Error('Provided key does not exist')
	}

	has(key: string): boolean {
		return !!this.storage[key]
	}

	hasExpired(item: CacheItem<T>): boolean {
		return Date.now() > item.expiresTime
	}
}
