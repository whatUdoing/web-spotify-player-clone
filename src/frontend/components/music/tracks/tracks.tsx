import React, { useRef, useEffect, useState } from 'react'
import TracksList from '../tracks-list/tracks-list'
import { TrackObjectFull } from 'types/services'

type Props = {
	tracks: Array<TrackObjectFull>
	onTracksLoad: () => void
}

const Tracks = ({ tracks, onTracksLoad }: Props) => {
	const $guardian = useRef<Element>(null)
	const [isObserving, setObserving] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries: Array<IntersectionObserverEntry>) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					if (entry.isIntersecting && $guardian.current) {
						observer.unobserve($guardian.current)
						setObserving(true)
						onTracksLoad()
					}
				})
			},
			{
				rootMargin: '0px',
				threshold: 1.0
			}
		)

		if ($guardian.current && !isObserving) {
			setObserving(true)
			observer.observe($guardian.current)
		}
	}, [$guardian, tracks])

	return (
		<div>
			<TracksList tracks={tracks} />
			<div ref={$guardian}></div>
		</div>
	)
}

export default Tracks
