import { Container } from 'typedi'
import HttpClient from '../services/httpClient'
import TokenServices from '../services/tokenSetvices'
import AuthService from '../services/authService'
import axios from 'axios'
import ConfigService from '../services/configService'
import { ServerConfigRecord } from 'server'

export const injectDependencies = (config: ServerConfigRecord) => {
	Container.set('config-service', new ConfigService(config))
	Container.set('http-client', new HttpClient(axios))
	Container.set('token-service', new TokenServices())
	Container.set(
		'auth-service',
		new AuthService(
			Container.get('token-service'),
			Container.get('http-client')
		)
	)
}
