import React from 'react'
import {
	render,
	fireEvent,
	getByText as globalGetByText
} from '@testing-library/react'
import { tracksData } from './test-data'
import TracksList from './tracks-list'

describe('[ TracksList ]', () => {
	it('should render tracks list from provided data', () => {
		const { getByText } = render(
			<TracksList handleTrackClick={() => {}} tracks={tracksData} />
		)

		tracksData.forEach(track => {
			expect(getByText(new RegExp(track.name, 'i'))).toBeInTheDocument()
		})
	})

	it('should render nothing when empty list provided', () => {
		const { container } = render(
			<TracksList tracks={[]} handleTrackClick={() => {}} />
		)

		expect(container).toBeEmpty()
	})

	test('if list calls provided callback when list item was clicked', () => {
		const handleClick = jest.fn(() => {})
		const track = tracksData[0]

		const { getByTestId } = render(
			<TracksList tracks={[track]} handleTrackClick={handleClick} />
		)

		fireEvent.click(getByTestId('play-track'))

		expect(handleClick).toHaveBeenCalledTimes(1)
		expect(handleClick).toBeCalledWith(track)
	})

	test('if tracks-list render properly required values', () => {
		const { getByText, getByTestId } = render(
			<TracksList tracks={tracksData} handleTrackClick={() => {}} />
		)

		tracksData.forEach(track => {
			expect(getByText(new RegExp(track.name))).toBeInTheDocument()

			track.artists.forEach(artist => {
				const $trackItem = getByTestId(`track-${track.id}`)

				expect(
					globalGetByText($trackItem, new RegExp(artist.name, 'i'))
				).toBeInTheDocument()
			})
		})
	})
})
