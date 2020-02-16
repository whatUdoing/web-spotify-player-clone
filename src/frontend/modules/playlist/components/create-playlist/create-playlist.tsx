import React, { useState } from 'react'
import CreatePlaylistModal from './subcomponents/create-playlist-modal'
import { ComponentEventObject } from 'components'

type Props = {
	createPlaylist: (playlistName: string) => void
	cssClasses?: {
		button: string
	}
}
const CreatePlaylistBtn = ({
	createPlaylist,
	cssClasses = {
		button: ''
	}
}: Props) => {
	const [isModalVisible, setVisibility] = useState(false)

	const handleCancelation = () => {
		setVisibility(false)
	}

	const handleAcceptation = (evt: ComponentEventObject) => {
		setVisibility(false)
		createPlaylist(evt.payload.playlistName)
	}

	return (
		<div>
			<button
				onClick={() => {
					setVisibility(true)
				}}
				className={cssClasses.button}
			>
				<span className="fas fa-plus mr-1"></span>
				Create playlist
			</button>

			<CreatePlaylistModal
				isVisible={isModalVisible}
				handleCancelation={handleCancelation}
				handleAcceptation={handleAcceptation}
			/>
		</div>
	)
}

export default CreatePlaylistBtn
