import { ServerConfigRecord } from 'server'

export default class ConfigService {
	config: ServerConfigRecord

	constructor(config: ServerConfigRecord) {
		this.config = config
	}

	getAuthConfig() {
		return {
			clientId: this.config.clientId,
			clientSecret: this.config.clientSecret,
			redirectUri: this.config.redirectUri
		}
	}

	getServerConfig() {
		return {
			port: this.config.port,
			host: this.config.host,
			rootPath: this.config.rootPath
		}
	}
}
