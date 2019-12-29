import { Container } from '../utils/classes/dependency-injector'
import UserService from './UserService/UserService'

/**
 * Note userServices must be initialize after api initialization
 * todo add event listener on api rdy
 */
export const initServices = () => {
	Container.set('user-service', new UserService())
}
