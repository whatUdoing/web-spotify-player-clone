import { CacheItem, ICacheManager } from 'classes'
import { Response } from 'http-client'
import CacheManager from '../cache-manager'

const mockedCacheManager = jest.genMockFromModule<jest.ModuleMocker>(
	'../cache-manager'
).default

let storage: Record<string, CacheItem<Response>> = {}

mockedCacheManager.__initCache__ = (
	data: Array<[string, Response, Record<string, any>?]>
) => {
	data.forEach(record => {
		storage = {}

		const cachedTime = Date.now()
		const expiresIn = record[2]?.expiresIn ?? 60

		storage[record[0]] = {
			data: record[1],
			expiresIn,
			cachedTime,
			expiresTime: cachedTime + expiresIn * 1000
		}
	})
}

mockedCacheManager.prototype.get = jest.fn((key: string) => {
	return storage[key] ?? null
})

export type mockedCacheManager<T> = jest.Mock<CacheManager<T>> & {
	__initCache__: (
		data: Array<[string, Response, Record<string, any>?]>
	) => void
}

export default mockedCacheManager
