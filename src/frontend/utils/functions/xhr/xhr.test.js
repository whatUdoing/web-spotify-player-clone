const { strigifyQueryParams, isResponseSuccess } = require('./xhr')
const Container = require('../../classes/dependency-injector')
const CacheManager = require('../../classes/cache-manager/cache-manager')

jest.mock('../../classes/cache-manager/cache-manager')

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
		}

		expect(isResponseSuccess(response, 'ok')).toBeTruthy()
		expect(isResponseSuccess(response)).toBeTruthy()
	})

	test('isResponseSuccess - custom statusText', () => {
		const response = {
			statusText: 'BAD'
		}

		expect(isResponseSuccess(response)).toBeFalsy()
		expect(isResponseSuccess(response, 'BAD')).toBeTruthy()
	})
})

describe('[ xhr ] caching methods', () => {
	beforeEach(() => {
		Container.set('request-cache-manager', new CacheManager())
	})
})
