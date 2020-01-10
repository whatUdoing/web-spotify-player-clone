import { trimString } from './trim-string'

describe('[ trimString ]', () => {
	it('should trim string greater than 30 characters', () => {
		const expectedLength = 30
		const trim30 = trimString(expectedLength)

		const entry =
			'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'

		expect(trim30(entry)).toHaveLength(expectedLength)
	})

	it('should leave string untrimed when lower than 30 characters', () => {
		const expectedLength = 30
		const trim30 = trimString(expectedLength)
		const entry = 'test sentence'

		expect(trim30(entry)).toHaveLength(entry.length)
	})
})
