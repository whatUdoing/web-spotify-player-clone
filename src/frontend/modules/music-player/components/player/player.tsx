import React from 'react'
import PlayerInterface from '../player-interface/player-interface'
import VolumeController from '../volume-controller/volume-controller'
import PlayerManager from '../player-manager/hoc-player-manager'
import PlayedTrack from '../played-track/hoc-played-track'

const Player = () => {
	return (
		<PlayerManager>
			<nav className="player">
				<div className="player__track-item">
					<PlayedTrack />
				</div>

				<div className="player__actions-btn">
					<PlayerInterface />
				</div>

				<div className="player__volume-controller">
					<VolumeController />
				</div>
			</nav>
		</PlayerManager>
	)
}

export default Player
