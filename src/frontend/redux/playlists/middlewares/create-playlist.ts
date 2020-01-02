import { Middleware } from 'redux'
import { CREATE_PLAYLIST } from '../actions-types'
import { IPlaylistsService } from 'types/services'
import { Container } from '../../../utils/classes/dependency-injector'
import { RootStateShape } from 'redux/reducers'
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
