import { Container } from 'typedi'
import HttpClient from '../services/http-client'
import TokenServices from '../services/token-services'
import AuthService from '../services/auth-service'
import axios from 'axios'
import ConfigService from '../services/config-service'
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
