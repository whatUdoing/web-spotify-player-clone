import { IHttpClient } from 'types/http-client'
import { Container } from '../utils/classes/dependency-injector'
import UserApiClient from './user'

export const injectApiClients = (httpClient: IHttpClient) => {
	Container.set('user-api-client', new UserApiClient(httpClient))
}
