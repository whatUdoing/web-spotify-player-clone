import React, { useRef, useEffect, useState } from 'react'
import TracksList from '../tracks-list/tracks-list'
import { TrackObjectFull, TrackObjectSimplified } from 'services'
import LoaderGuardian from '../../../../components/loader-guardian/loader-guardian'
import { useGuardianLazyLoading } from '../../../../lib/hooks/use-guardian-lazy-loading'

type Props = {
	tracks: Array<TrackObjectSimplified | TrackObjectFull>
	loadAction: Function
	allLoaded: boolean
	handleTrackClick: (track: TrackObjectSimplified | TrackObjectFull) => void
	setPlayerTracks: (
		tracks: Array<TrackObjectSimplified | TrackObjectFull>
	) => void
}

const Tracks = ({
	tracks,
	loadAction,
	allLoaded,
	handleTrackClick,
	setPlayerTracks
}: Props) => {
	const $guardian = useRef<HTMLDivElement>(null)
	useGuardianLazyLoading($guardian, allLoaded, loadAction, tracks.length)

	useEffect(() => {
		if (tracks.length <= 0) {
			return
		}

		setPlayerTracks(tracks.filter(track => track.preview_url))

		return () => {
			setPlayerTracks([])
		}
	}, [tracks.length])

	return (
		<div>
			<TracksList handleTrackClick={handleTrackClick} tracks={tracks} />
			{!allLoaded && <LoaderGuardian ref={$guardian} />}
		</div>
	)
}

export default Tracks
