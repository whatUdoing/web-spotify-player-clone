import { IHttpClient } from 'types/http-client'
import { Container } from '../utils/classes/dependency-injector'
import UserApiClient from './user'
import PlaylistsApiClient from './playlists'
import AlbumsApiClient from './albums'
import TracksApiClient from './tracks'

export const injectApiClients = (httpClient: IHttpClient) => {
	Container.set('user-api-client', new UserApiClient(httpClient))
	Container.set('playlists-api-client', new PlaylistsApiClient(httpClient))
	Container.set('albums-api-client', new AlbumsApiClient(httpClient))
	Container.set('tracks-api-client', new TracksApiClient(httpClient))
}
