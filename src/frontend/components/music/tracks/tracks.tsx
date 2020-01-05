import React, { useRef } from 'react'
import TracksList from './tracks-list/tracks-list'
import { TrackObjectFull, TrackObjectSimplified } from 'types/services'
import LoaderGuardian from '../../loader-guardian/loader-guardia'
import { useGuardianLazyLoading } from '../../../utils/hooks/use-guardian-lazy-loading'

type Props = {
	tracks: Array<TrackObjectFull | TrackObjectSimplified>
	loadAction: Function
	allLoaded: boolean
}

const Tracks = ({ tracks, loadAction, allLoaded }: Props) => {
	const $guardian = useRef<Element>(null)
	useGuardianLazyLoading($guardian, allLoaded, loadAction)

	return (
		<div>
			<TracksList tracks={tracks} />
			<LoaderGuardian ref={$guardian} />
		</div>
	)
}

export default Tracks
