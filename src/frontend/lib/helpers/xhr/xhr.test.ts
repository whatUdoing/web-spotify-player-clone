import {
	strigifyQueryParams,
	isResponseSuccess,
	cacheResponse,
	getCachedResponse
} from './xhr'
import { Container } from '../../classes/dependency-injector/dependency-injector'
import CacheManager from '../../classes/cache-manager/cache-manager'
import { Response } from 'http-client'
import { mocked } from 'ts-jest/utils'
import { mockedCacheManager } from '../../classes/cache-manager/__mocks__/cache-manager'
import { ICacheManager } from 'classes'

jest.mock('../../classes/cache-manager/cache-manager')

const mCachedManager = (CacheManager as unknown) as mockedCacheManager<Response>

describe('[ xhr ] function helpers', () => {
	test('strigifyQueryParams', () => {
		expect(
			strigifyQueryParams({
				limit: 12,
				offset: 2
			})
		).toBe('limit=12&offset=2')

		expect(strigifyQueryParams()).toBe('')

		expect(
			strigifyQueryParams({
				limit: 12
			})
		).toBe('limit=12')
	})

	test('isResponseSuccess - statusText default', () => {
		const response = {
			statusText: 'OK'
		} as Response

		expect(isResponseSuccess(response, 'ok')).toBeTruthy()
		expect(isResponseSuccess(response)).toBeTruthy()
	})

	test('isResponseSuccess - custom statusText', () => {
		const response = {
			statusText: 'BAD'
		} as Response

		expect(isResponseSuccess(response)).toBeFalsy()
		expect(isResponseSuccess(response, 'BAD')).toBeTruthy()
	})
})

describe('[ xhr ] caching methods', () => {
	beforeEach(() => {
		mCachedManager.mockClear()
		Container.set('request-cache-manager', new CacheManager())
	})

	test('cacheResponse', () => {
		const response = {
			request: {
				responseURL: 'cache-response-test'
			}
		} as Response

		const settings = {
			expiresIn: 60
		}

		const cacheManager = Container.get(
			'request-cache-manager'
		) as ICacheManager<Response>

		const mockedCacheResponse = jest.fn(cacheResponse)
		mockedCacheResponse(cacheManager, response, settings)

		const mockedAdd = mocked(mCachedManager.mock.instances[0].add)

		expect(mockedCacheResponse).toBeCalledTimes(1)
		expect(mockedCacheResponse).toBeCalledWith(
			cacheManager,
			response,
			settings
		)
		expect(mockedAdd).toBeCalledTimes(1)
		expect(mockedAdd).toBeCalledWith(
			response.request.responseURL,
			response,
			settings
		)
	})

	test('getCachedResponse - element was added before', () => {
		const data: Array<[string, Response, Record<string, any>?]> = [
			[
				'cache-response-test',
				{
					request: {
						responseURL: 'cache-response-test'
					}
				} as Response
			]
		]

		mCachedManager.__initCache__(data)

		const cacheManager = Container.get(
			'request-cache-manager'
		) as ICacheManager<Response>

		const mockedGetCachedManager = jest.fn(getCachedResponse)
		const mockedGetCache = mocked(mCachedManager.mock.instances[0].get)
		const cached = mockedGetCachedManager(cacheManager, data[0][0])

		expect(cached?.data).toBe(data[0][1])
		expect(mockedGetCache).toBeCalledTimes(1)
		expect(mockedGetCache).toBeCalledWith(data[0][0])
	})
})
