declare module 'tokens' {
	export type TokenObject = {
		accessToken: string
		tokenType: string
		expiresIn: number
		creationDate: number
		refreshToken: string
		scope: string
	}

	export type TokenOperationResult = [TokenObject | null, Error | null]

	export interface ITokenService {
		getTokenObject(token: string): TokenOperationResult
		removeToken(token: string): TokenOperationResult
		setTokenData(token: string, data: TokenObject): TokenOperationResult
	}
}
