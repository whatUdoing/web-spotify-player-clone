declare module 'server' {
	export type ServerConfigRecord = {
		host: string
		port: number
		rootPath: string
		clientId: string
		clientSecret: string
		redirectUri: string
	}
}
