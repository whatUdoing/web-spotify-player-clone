import React, { useState, useEffect } from 'react'
import { PlayerContext } from '../../local-store/player-context'
import { TrackObjectFull, TrackObjectSimplified } from 'services'

type Props = {
	currentTrack: TrackObjectFull | TrackObjectSimplified | null
	isPlaying: boolean

	tracks: Array<TrackObjectSimplified | TrackObjectFull>
	currentTrackNumber: number

	playNext: () => void
	playPrev: () => void
	pause: () => void
	resume: () => void

	children: JSX.Element
}
const PlayerManager = ({
	children,
	currentTrack,
	isPlaying,
	pause,
	resume,
	playNext,
	playPrev,
	tracks,
	currentTrackNumber
}: Props) => {
	const [track, setTrack] = useState<MediaElementAudioSourceNode>()
	const [, setAudio] = useState<HTMLAudioElement>()
	const [, setContext] = useState<AudioContext>()
	const [gainNode, setGainNode] = useState<GainNode>()
	const [hasNext, setHasNext] = useState(false)
	const [hasPrev, setHasPrev] = useState(false)

	useEffect(() => {
		if (!currentTrack) return

		const audio = new Audio()
		const context = new AudioContext()

		if (context?.state === 'suspended') {
			context?.resume()
		}

		audio.crossOrigin = 'anonymous'
		audio.src = currentTrack.preview_url

		const track = context.createMediaElementSource(audio)
		const gainNode = context.createGain()

		track.connect(gainNode).connect(context.destination)
		track.mediaElement.play()

		setTrack(track)
		setAudio(audio)
		setContext(context)
		setGainNode(gainNode)

		return () => {
			track?.mediaElement.pause()
			track?.disconnect()
		}
	}, [currentTrack])

	useEffect(() => {
		setHasNext(currentTrackNumber < tracks.length - 1)
		setHasPrev(currentTrackNumber > 0)
	}, [tracks.length, currentTrackNumber])

	const handleVolumeChange = (value: number) => {
		if (gainNode) {
			gainNode.gain.value = value
		}
	}

	return (
		<PlayerContext.Provider
			value={{
				currentTrack,
				isPlaying,
				tracks,
				currentTrackNumber,

				pause: () => {
					track?.mediaElement.pause()
					pause()
				},
				resume: () => {
					track?.mediaElement.play()
					resume()
				},

				playNext,
				playPrev,

				hasNext,
				hasPrev,

				handleVolumeChange
			}}
		>
			{children}
		</PlayerContext.Provider>
	)
}

export default PlayerManager
