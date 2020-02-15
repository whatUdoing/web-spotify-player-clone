import React, { useRef, useEffect, useState } from 'react'
import TracksList from '../tracks-list/tracks-list'
import { TrackObjectFull, TrackObjectSimplified } from 'services'
import LoaderGuardian from '../../../../components/loader-guardian/loader-guardian'
import { useGuardianLazyLoading } from '../../../../lib/hooks/use-guardian-lazy-loading'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
	startTrack,
	setTracks,
	setTrack
} from '../../../music-player/store/actions'

type Props = {
	tracks: Array<TrackObjectSimplified | TrackObjectFull>
	loadAction: Function
	allLoaded: boolean
	handleTrackClick: (
		track: TrackObjectSimplified | TrackObjectSimplified
	) => void
	setPlayerTracks: (
		tracks: Array<TrackObjectSimplified | TrackObjectSimplified>
	) => void
}

const Tracks = ({
	tracks,
	loadAction,
	allLoaded,
	handleTrackClick,
	setPlayerTracks
}: Props) => {
	const $guardian = useRef<Element>(null)
	useGuardianLazyLoading($guardian, allLoaded, loadAction, tracks.length)

	useEffect(() => {
		setPlayerTracks(tracks.filter(track => track.preview_url))

		return () => {
			setPlayerTracks([])
		}
	}, [tracks.length])

	return (
		<div>
			<TracksList handleTrackClick={handleTrackClick} tracks={tracks} />
			<LoaderGuardian ref={$guardian} />
		</div>
	)
}

// export default Tracks

const mapDispatchToProps = (disapatch: Dispatch) => {
	return {
		handleTrackClick: (
			track: TrackObjectSimplified | TrackObjectSimplified
		) => {
			disapatch(setTrack(track))
			disapatch(startTrack())
		},

		setPlayerTracks: (
			tracks: Array<TrackObjectSimplified | TrackObjectSimplified>
		) => {
			disapatch(setTracks(tracks))
		}
	}
}

export default connect(null, mapDispatchToProps)(Tracks)
