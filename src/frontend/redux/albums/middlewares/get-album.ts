import { Middleware } from 'redux'
import { albumsActionTypes, GET_ALBUM } from '../actions-types'
import { Container } from '../../../utils/classes/dependency-injector/dependency-injector'
import { IAlbumsService } from 'types/services'
import { addAlbum } from '../actions'

export const getAlbum: Middleware = ({ dispatch }) => next => async (
	action: albumsActionTypes
) => {
	next(action)

	if (action.type === GET_ALBUM) {
		const AlbumsServices = Container.get('albums-service') as IAlbumsService

		const [album, error] = await AlbumsServices.getAlbum(
			action.payload.albumId
		)

		if (error) {
			/**
			 * handle flash message or something :?
			 */
			console.error(error)
		}

		if (album) {
			dispatch(addAlbum(album))
		}
	}
}
