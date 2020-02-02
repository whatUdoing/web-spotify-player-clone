import React, { useContext } from 'react'
import {
	PlayerContext,
	PlayerContextType
} from '../../local-store/player-context'

const PlayerInterface = () => {
	const {
		playPrev,
		playNext,
		resume,
		pause,
		isPlaying,
		hasNext,
		hasPrev
	} = useContext<PlayerContextType>(PlayerContext)

	return (
		<nav className="player__actions-btn">
			<button
				className={`btn btn_light btn_round-icon ${
					!hasPrev ? 'btn_disabled btn_light-inactive' : ''
				}`}
				onClick={playPrev}
			>
				<i className="fas fa-step-backward" />
			</button>

			{isPlaying ? (
				<button
					className="btn btn_bg btn_round-icon ml-1 mr-1"
					onClick={pause}
				>
					<i className="fas fa-pause" />
				</button>
			) : (
				<button
					className="btn btn_bg btn_round-icon ml-1 mr-1"
					onClick={resume}
				>
					<i className="fas fa-play" />
				</button>
			)}

			<button
				className={`btn btn_light btn_round-icon ${
					!hasNext ? 'btn_disabled btn_light-inactive' : ''
				}`}
				onClick={playNext}
			>
				<i className="fas fa-step-forward" />
			</button>
		</nav>
	)
}

export default PlayerInterface
