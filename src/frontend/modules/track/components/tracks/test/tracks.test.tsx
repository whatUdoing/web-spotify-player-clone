import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { getByText as getByTextGlobal } from '@testing-library/dom'
import { mockedData } from './mocked-data/tracks'
import Tracks from '../tracks'
import { TrackObjectSimplified, TrackObjectFull } from 'services'

type IntersectionObserverTest = Partial<IntersectionObserver> & {
	__fireIntersectingHandler__: (allIntersecting: boolean) => void
	__clearHandlers__: () => void
}

const mockIntersectionObserver = () => {
	let handlers: Array<Function> = []

	const IntersectionObserver = (
		eventHandler: (
			entries: Array<{
				isIntersecting: boolean
			}>
		) => void
	) => {
		handlers.push(eventHandler)

		return {
			observe: jest.fn(),
			unobserve: jest.fn()
		}
	}

	IntersectionObserver.__fireIntersectingHandler__ = (
		allIntersecting: boolean
	) => {
		handlers.forEach(handler =>
			handler([
				{
					isIntersecting: allIntersecting
				}
			])
		)
	}

	IntersectionObserver.__clearHandlers__ = () => {
		handlers = []
	}

	Object.defineProperty(window, 'IntersectionObserver', {
		writable: true,
		value: jest.fn().mockImplementation(IntersectionObserver)
	})
}

beforeAll(() => {
	mockIntersectionObserver()
})

afterEach(cleanup)

describe('[ tracks ]', () => {
	it('should render provided tracks', () => {
		const { getByTestId } = render(
			<Tracks
				tracks={mockedData}
				allLoaded={true}
				loadAction={() => {}}
				setPlayerTracks={(
					tracks: Array<TrackObjectSimplified | TrackObjectFull>
				) => {}}
				handleTrackClick={(
					track: TrackObjectSimplified | TrackObjectFull
				) => {}}
			/>
		)

		mockedData.forEach(track => {
			const $track = getByTestId(`track-${track.id}`)

			expect($track).toBeInTheDocument()
			expect(getByTextGlobal($track, track.name)).toBeInTheDocument()
		})
	})

	it('should should trigger setTracks when provided array of tracks is not empty', () => {
		const setPlayerTracks = jest.fn()

		const {} = render(
			<Tracks
				tracks={mockedData}
				allLoaded={true}
				loadAction={() => {}}
				setPlayerTracks={setPlayerTracks}
				handleTrackClick={(
					track: TrackObjectSimplified | TrackObjectFull
				) => {}}
			/>
		)

		expect(setPlayerTracks).toBeCalledTimes(1)
	})

	it('should not trigger setTracks action when provided tracks list is empty', () => {
		const setPlayerTracks = jest.fn()

		const {} = render(
			<Tracks
				tracks={[]}
				allLoaded={true}
				loadAction={() => {}}
				setPlayerTracks={setPlayerTracks}
				handleTrackClick={(
					track: TrackObjectSimplified | TrackObjectFull
				) => {}}
			/>
		)

		expect(setPlayerTracks).not.toHaveBeenCalled()
	})

	it('should trigger load action when more tracks are available and lazyGuardian is in a viewport', () => {
		const loadAction = jest.fn()
		const allTracksLoaded = false

		const {} = render(
			<Tracks
				tracks={mockedData}
				allLoaded={allTracksLoaded}
				loadAction={loadAction}
				setPlayerTracks={() => {}}
				handleTrackClick={(
					track: TrackObjectSimplified | TrackObjectFull
				) => {}}
			/>
		)

		const IntersectionObserver: IntersectionObserverTest = (window.IntersectionObserver as jest.MockedFunction<
			any
		>).getMockImplementation()

		IntersectionObserver.__fireIntersectingHandler__(true)

		expect(loadAction).toBeCalledTimes(1)
	})
})
