import React, { ReactNode } from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CreatePlaylist from '../create-playlist'

const setup = (CreatePlaylist: ReactNode) => {
	return (
		<div>
			{CreatePlaylist}
			<div className="js__modal-portal"></div>
		</div>
	)
}

afterEach(cleanup)

describe('[ create-playlist ]', () => {
	it('should open modal with creation playlist from, when button clicked', async () => {
		const { getByText, getByTestId } = render(
			setup(<CreatePlaylist createPlaylist={() => {}} />)
		)

		fireEvent.click(getByText('Create playlist'))

		expect(getByTestId('create-playlist-form')).toBeInTheDocument()
	})

	it('should prevent from sending request if name input is empty', () => {
		const createPlaylistAction = jest.fn()

		const { getByText } = render(
			setup(<CreatePlaylist createPlaylist={createPlaylistAction} />)
		)

		fireEvent.click(getByText(/create playlist/i))

		expect(createPlaylistAction).not.toBeCalled()
	})

	test('if cancel button hide modal', () => {
		const { getByText, queryByTestId } = render(
			setup(<CreatePlaylist createPlaylist={() => {}} />)
		)

		fireEvent.click(getByText('Create playlist'))
		fireEvent.click(getByText(/cancel/i))

		expect(queryByTestId('create-playlist-form')).toBeNull()
	})

	test('if "create" button with properly filled from triggers action to create playlist', () => {
		const createPLaylistAction = jest.fn()
		const { getByText, queryByTestId } = render(
			setup(<CreatePlaylist createPlaylist={createPLaylistAction} />)
		)
	})
})
