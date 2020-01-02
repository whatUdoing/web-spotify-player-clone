import { Container } from '../utils/classes/dependency-injector'
import UserService from './user-service/user-service'
import PlaylistsService from './playlists-service/playlists-service'

/**
 * Note userServices must be initialize after api initialization
 * todo add event listener on api rdy
 */
export const initServices = () => {
	Container.set('user-service', new UserService())
	Container.set('playlists-service', new PlaylistsService())
}
