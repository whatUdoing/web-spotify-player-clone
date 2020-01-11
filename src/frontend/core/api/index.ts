import { IHttpClient } from 'http-client'
import { Container } from '../../lib/classes/dependency-injector/dependency-injector'
import UserApiClient from './user'
import PlaylistsApiClient from './playlists'
import AlbumsApiClient from './albums'
import TracksApiClient from './tracks'
import CacheManager from '../../lib/classes/cache-manager/cache-manager'

export const injectApiClients = (httpClient: IHttpClient) => {
	Container.set('request-cache-manager', new CacheManager<Response>())
	Container.set('user-api-client', new UserApiClient(httpClient))
	Container.set('playlists-api-client', new PlaylistsApiClient(httpClient))
	Container.set('albums-api-client', new AlbumsApiClient(httpClient))
	Container.set('tracks-api-client', new TracksApiClient(httpClient))
}
