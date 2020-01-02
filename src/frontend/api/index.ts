import { IHttpClient } from 'types/http-client'
import { Container } from '../utils/classes/dependency-injector'
import UserApiClient from './user'
import PlaylistsApiClient from './playlists'

export const injectApiClients = (httpClient: IHttpClient) => {
	Container.set('user-api-client', new UserApiClient(httpClient))
	Container.set('playlists-api-client', new PlaylistsApiClient(httpClient))
}
