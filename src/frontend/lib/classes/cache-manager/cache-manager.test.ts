import CacheManager from './cache-manager'

type Product = {
	id: string
	name: string
	price: number
}

const products: Array<Product> = [
	{
		id: '1',
		name: 'Orange',
		price: 12
	},
	{
		id: '2',
		name: 'Apple',
		price: 6
	},
	{
		id: '3',
		name: 'Kiwi',
		price: 23
	}
]

describe('[ CacheManager ] - adding to cache', () => {
	test('if value is corectly added to cache', () => {
		const cacheManager = new CacheManager<Product>()
		const orange = {
			id: '1',
			name: 'Orange',
			price: 12
		}

		const startStorageLength = Object.keys(cacheManager.storage).length

		cacheManager.add(orange.id, orange)

		const cachedItem = cacheManager.storage[orange.id]

		expect(startStorageLength).toBe(0)
		expect(Object.keys(cacheManager.storage)).toHaveLength(1)
		expect(cachedItem.data).toBe(orange)
	})

	test('if values is corectly added to cache', () => {
		const cacheManager = new CacheManager<Product>()

		products.forEach(product => {
			cacheManager.add(product.id, product)
		})

		expect(Object.keys(cacheManager.storage)).toHaveLength(products.length)

		products.forEach(product => {
			const cachedItem = cacheManager.storage[product.id]

			expect(cachedItem).toHaveProperty('data')
			expect(cachedItem).toHaveProperty('expiresIn')
			expect(cachedItem).toHaveProperty('cachedTime')
			expect(cachedItem).toHaveProperty('expiresTime')

			expect(cachedItem.data).toBe(product)
		})
	})

	it('should not let to add value to cache with exisitnig id, if te first value is still valid', () => {
		const cacheManager = new CacheManager<Product>()
		const orange = {
			id: '1',
			name: 'Orange',
			price: 12
		}

		cacheManager.add(orange.id, orange)

		try {
			expect(cacheManager.add(orange.id, orange)).toThrow(
				'Value with privded key already exists'
			)
		} catch {}
	})

	it('should let add value if existing value has expired already', async () => {
		const cacheManager = new CacheManager<Product>()
		const orange = {
			id: '1',
			name: 'Orange',
			price: 12
		}

		cacheManager.add(orange.id, orange, {
			expiresIn: 1 // in seconds
		})

		await new Promise(resolve => {
			setTimeout(() => {
				resolve()
			}, 1100)
		})

		const newOrange = {
			id: '1',
			name: 'Orange 2.0',
			price: 22
		}

		cacheManager.add(newOrange.id, newOrange)

		expect(Object.keys(cacheManager.storage)).toHaveLength(1)
		expect(cacheManager.storage[newOrange.id].data).toBe(newOrange)
	})
})

describe('[ CacheManager ] - removing from cache', () => {
	it('should remove all items previusly added', () => {
		const cacheManager = new CacheManager<Product>()

		products.forEach(product => cacheManager.add(product.id, product))

		expect(Object.keys(cacheManager.storage)).toHaveLength(products.length)

		products.forEach(product => cacheManager.remove(product.id))

		expect(Object.keys(cacheManager.storage)).toHaveLength(0)
	})

	it('should throw an Error if item does not exist', () => {
		const cacheManager = new CacheManager<Product>()

		try {
			expect(cacheManager.remove('123')).toThrowError(
				'Provided key does not exist'
			)
		} catch {}
	})
})

describe('[ CacheManager ] - checking cache', () => {
	it('should return true for added element', () => {
		const cacheManager = new CacheManager<Product>()
		const orange = {
			id: '1',
			name: 'Orange',
			price: 12
		}

		cacheManager.add(orange.id, orange)

		expect(cacheManager.has(orange.id)).toBeTruthy()
	})

	it('should return false for not existing product', () => {
		const cacheManager = new CacheManager<Product>()

		expect(cacheManager.has('123')).toBeFalsy()
	})
})

describe('[ CacheManager ] - checking item expiring', () => {
	it('should return false for item which has not expired', () => {
		const cacheManager = new CacheManager<Product>()
		const orange = {
			id: '1',
			name: 'Orange',
			price: 12
		}

		cacheManager.add(orange.id, orange)

		expect(
			cacheManager.hasExpired(cacheManager.storage[orange.id])
		).toBeFalsy()
	})

	it('should return true for item which has expired', async () => {
		const cacheManager = new CacheManager<Product>()
		const orange = {
			id: '1',
			name: 'Orange',
			price: 12
		}

		cacheManager.add(orange.id, orange, {
			expiresIn: 1
		})

		await new Promise(resolve => {
			setTimeout(() => {
				resolve()
			}, 1100)
		})

		expect(
			cacheManager.hasExpired(cacheManager.storage[orange.id])
		).toBeTruthy()
	})
})

describe('[ CacheManager ] - getting cached item', () => {
	it('should return item that has been cached previously', () => {
		const cacheManager = new CacheManager<Product>()
		const orange = {
			id: '1',
			name: 'Orange',
			price: 12
		}

		cacheManager.add(orange.id, orange, {
			expiresIn: 1
		})

		expect(cacheManager.get(orange.id)?.data).toBe(orange)
	})

	it('should return null while getting not cached item', () => {
		const cacheManager = new CacheManager<Product>()

		expect(cacheManager.get('123')).toBeNull()
	})
})
