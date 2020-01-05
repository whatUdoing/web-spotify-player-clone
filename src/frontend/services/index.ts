import { Container } from '../utils/classes/dependency-injector'
import UserService from './user-service/user-service'
import PlaylistsService from './playlists-service/playlists-service'
import TracksSrvice from './tracks-service/tracks-service'
import AlbumSservice from './albums-service/albums-services'

/**
 * Note userServices must be initialize after api initialization
 * todo add event listener on api rdy
 */
export const initServices = () => {
	Container.set('user-service', new UserService())
	Container.set('playlists-service', new PlaylistsService())
	Container.set('tracks-service', new TracksSrvice())
	Container.set('albums-service', new AlbumSservice())
}
