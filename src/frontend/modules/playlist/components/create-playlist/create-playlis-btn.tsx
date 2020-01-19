import React, { useState } from 'react'
import { css } from '@emotion/core'
import CreatePlaylistModal from './create-playlist-modal'
import { ComponentEventObject } from 'components'

type Props = {
	createPlaylist: (playlistName: string) => void
	cssClasses: {
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
				<i className="fas fa-plus"></i>

				<span
					css={css`
						//todo change to variables
						margin-left: 0.5em;
					`}
				>
					Create playlist
				</span>
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
