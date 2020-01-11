import { Middleware } from 'redux'
import { CREATE_PLAYLIST } from '../actions-types'
import { IPlaylistsService } from 'services'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { RootStateShape } from 'redux-store'
import { newPlaylistCreated } from '../actions'

export const createPlaylist: Middleware = ({
	dispatch,
	getState
}) => next => async action => {
	next(action)

	const state = <RootStateShape>getState()
	const userId = state?.user?.profile?.id

	if (action.type == CREATE_PLAYLIST && userId) {
		const playlistsService: IPlaylistsService = <IPlaylistsService>(
			Container.get('playlists-service')
		)

		// dispatch(setUserLoading(true))

		const playlistName = action?.payload?.playlistName

		const [playlist, error] = await playlistsService.createPlaylist(
			playlistName,
			userId
		)

		if (error) {
			/**
			 * todo: Handle errror (flash messanger implement)
			 */
			console.log(error)
		}

		if (playlist) {
			dispatch(newPlaylistCreated(playlist))
		}

		// dispatch(setUserLoading(false))
	}
}
