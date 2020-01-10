import { getResourceUri } from './resource-uri'

describe('[ getResourceUri ]', () => {
	it('should return correct path for specific resources', () => {
		const id = '124sasdd33rfvvc'
		const resources: Record<string, string> = {
			playlist: `/playlist/${id}`,
			artist: `/artist/${id}`,
			track: `/track/${id}`,
			album: `/album/${id}`
		}

		Object.keys(resources).forEach(type => {
			expect(
				getResourceUri(type, {
					[`${type}Id`]: id
				})
			).toBe(resources[type])
		})
	})

	it('should return correct path for specific resource with extra params', () => {
		const id = '124sasdd33rfvvc'
		const type = 'playlist'
		const resource = `/${type}/${id}`

		expect(
			getResourceUri(type, {
				playlistId: id,
				value: '12'
			})
		).toBe(resource)
	})

	it('should not substitute string if provided params does not match', () => {
		const id = '124sasdd33rfvvc'
		const type = 'playlist'
		const resource = `/${type}/${id}`

		expect(
			getResourceUri(type, {
				id
			})
		).not.toBe(resource)

		expect(
			getResourceUri(type, {
				id
			})
		).toBe('/playlist/:playlistId')
	})
})
