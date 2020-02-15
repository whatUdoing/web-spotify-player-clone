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
				<div className="modal__content">
					<h1>Create new playlist</h1>

					<button
						className="btn btn_icon modal__btn-close btn_round-icon"
						onClick={handleCancelation}
					>
						<span className="far fa-times-circle"></span>
					</button>

					<div className="ui-controls">
						<div className="ui-controls__label ui-controls__label_required">
							<label htmlFor="playlist-name">Playlist name</label>
						</div>

						<div className="ui-controls__element">
							<input
								className="control"
								onChange={handleInputChange}
								value={playlistName}
								placeholder="Playlist name"
								type="text"
								id="playlist-name"
							/>
						</div>
					</div>

					<footer className="modal__footer mt-4">
						<button
							className="btn btn_outline"
							onClick={handleCancelation}
						>
							Cancel
						</button>

						<button
							className="ml-1 btn btn_bg"
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
