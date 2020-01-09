declare module 'config-service' {
	import { AuthConfigObject } from 'auth-service'

	export interface IConfigService {
		getAuthConfig(): AuthConfigObject
		getServerConfig(): {
			port: string
			host: string
			rootPath: string
		}
	}
}
