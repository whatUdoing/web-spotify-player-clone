import { ICacheManager, CacheSettings, CacheItem } from 'types/classes'

export default class CacheManager<T> implements ICacheManager<T> {
	storage: Record<string, CacheItem<T>>

	static defaultCacheTime: 60

	constructor() {
		this.storage = {}
	}

	add(key: string, value: T, settings?: CacheSettings): boolean | Error {
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

		return Error('Value with privded key already exists')
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

		return Error('Provided key does not exist')
	}

	has(key: string): boolean {
		let item: CacheItem<T> | boolean = this.storage[key]

		if (item && this.hasExpired(item)) {
			this.remove(key)

			item = false
		}

		return !!item
	}

	hasExpired(item: CacheItem<T>): boolean {
		return Date.now() < item.expiresTime
	}
}
