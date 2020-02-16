import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import AlbumFullPreview from '../album-full-preview'
import { AlbumContext, AlbumStoreShape } from '../../../store'

import { mockedData } from './mocked-data/album'
import { AlbumObjectFull } from 'services'

afterEach(cleanup)

const appShell = (contextValue: AlbumStoreShape) => {
	return (
		<AlbumContext.Provider value={contextValue}>
			<AlbumFullPreview />
		</AlbumContext.Provider>
	)
}

/**
 * TODO
 */
describe.skip('[ album full preview ]', () => {
	it('should render provided album', () => {
		const initialStore: AlbumStoreShape = {
			album: mockedData as AlbumObjectFull,
			isLoadingAlbum: false,

			tracksLoaded: false,
			isLoadingTracks: false,

			loadTracks: () => {}
		}
		const { container } = render(appShell(initialStore))

		expect(container.firstChild).toMatchInlineSnapshot()
	})
})
