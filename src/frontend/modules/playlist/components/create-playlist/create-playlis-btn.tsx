import React, { useState } from 'react'
import { css } from '@emotion/core'
import CreatePlaylistModal from './create-playlist-modal'
import { ComponentEventObject } from 'components'

type Props = {
	createPlaylist: (playlistName: string) => void
}
const CreatePlaylistBtn = ({ createPlaylist }: Props) => {
	const [isModalVisible, setVisibility] = useState(false)

	const handleCancelation = () => {
		setVisibility(false)
	}

	const handleAcceptation = (evt: ComponentEventObject) => {
		setVisibility(false)
		//create playlist store
		createPlaylist(evt.payload.playlistName)
	}

	return (
		<div>
			<button
				onClick={() => {
					setVisibility(true)
				}}
				css={css`
					border: none;
					background: none;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 0;
					cursor: pointer;
				`}
			>
				<i className="far fa-plus-square fa-2x"></i>

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
