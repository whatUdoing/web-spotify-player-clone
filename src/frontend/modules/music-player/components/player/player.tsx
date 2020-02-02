import React from 'react'
import PlayerInterface from '../player-interface/player-interface'
import VolumeController from '../volume-controller/volume-controller'
import PlayerManager from '../player-manager/hoc-player-manager'

const Player = () => {
	return (
		<PlayerManager>
			<nav className="player">
				<div className="player__track-item">track preview</div>

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
