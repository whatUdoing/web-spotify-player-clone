import React, { useState, SyntheticEvent } from 'react'
import Modal from '../../../../../components/modal/modal'
import { ComponentEventHandler } from 'components'

type Props = {
	isVisible: boolean
	handleCancelation: () => void
	handleAcceptation: ComponentEventHandler
}
const CreatePlaylistModal = ({
	isVisible = false,
	handleCancelation,
	handleAcceptation
}: Props) => {
	const [playlistName, setPlaylistName] = useState('')

	const handleInputChange = (
		evt: SyntheticEvent<HTMLInputElement, Event>
	) => {
		console.log('input change')
		setPlaylistName((evt.target as HTMLInputElement).value)
	}

	return (
		<>
			<Modal isVisible={isVisible}>
				<div className="modal__content">
					<form
						onSubmit={evt => {
							evt.preventDefault()

							handleAcceptation({
								reactEvent: evt,
								payload: {
									playlistName
								}
							})
						}}
						data-testid="create-playlist-form"
					>
						<h1>Create new playlist</h1>

						<button
							className="btn btn_icon modal__btn-close btn_round-icon"
							onClick={handleCancelation}
						>
							<span className="far fa-times-circle"></span>
						</button>

						<div className="ui-controls">
							<div className="ui-controls__label ui-controls__label_required">
								<label htmlFor="playlist-name">
									Playlist name
								</label>
							</div>

							<div className="ui-controls__element">
								<input
									required
									name="playlist-name"
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
								type="button"
								className="btn btn_outline"
								onClick={handleCancelation}
							>
								Cancel
							</button>

							<button className="ml-1 btn btn_bg">Create</button>
						</footer>
					</form>
				</div>
			</Modal>
		</>
	)
}

export default CreatePlaylistModal
