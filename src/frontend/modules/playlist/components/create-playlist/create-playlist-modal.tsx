import React, { ReactEventHandler, useState, SyntheticEvent } from 'react'
import Modal from '../../../../components/modal/modal'
import { css } from '@emotion/core'
import { ComponentEventHandler } from 'components'

type Props = {
	isVisible: boolean
	handleCancelation: ComponentEventHandler
	handleAcceptation: ComponentEventHandler
}
const CreatePlaylistModal = ({
	isVisible = false,
	handleCancelation,
	handleAcceptation
}: Props) => {
	const [playlistName, setPlaylistName] = useState('')

	const handleInputChange = (evt: SyntheticEvent<Element, Event>) => {
		setPlaylistName(evt.target.value)
	}

	return (
		<>
			<Modal isVisible={isVisible}>
				<div>
					<header>Create new playlist</header>

					<button onClick={handleCancelation}>
						<i className="far fa-times-circle"></i>
					</button>

					<label htmlFor="playlist-name">Playlist name</label>

					<input
						onChange={handleInputChange}
						value={playlistName}
						placeholder="Playlist name"
						type="text"
						id="playlist-name"
					/>

					<footer>
						<button onClick={handleCancelation}>Cancel</button>
						<button
							onClick={evt => {
								handleAcceptation({
									reactEvent: evt,
									payload: {
										playlistName
									}
								})
							}}
						>
							Create
						</button>
					</footer>
				</div>
			</Modal>
		</>
	)
}

export default CreatePlaylistModal
