import { ITokenService, TokenObject, TokenOperationResult } from 'tokens'

/**
 * This should be putted in real DB, but for simplicity token data will be hold in memory
 */

export default class TokenServices implements ITokenService {
	tokens: {
		[index: string]: TokenObject | null
	} = {}

	getTokenObject(token: string): TokenOperationResult {
		if (this.tokens[token]) {
			return [this.tokens[token], null]
		}

		return [null, new Error('Token doesnt exist')]
	}

	removeToken(token: string): TokenOperationResult {
		const wantedToken = this.tokens[token] || null
		let error = null

		if (wantedToken) {
			this.tokens[token] = null
		} else {
			error = new Error('Provided token doesnt exist')
		}

		return [wantedToken, error]
	}

	setTokenData(token: string, data: TokenObject): TokenOperationResult {
		if (!this.tokens[token]) {
			return [(this.tokens[token] = data), null]
		}

		return [null, new Error('Token already exist')]
	}
}
