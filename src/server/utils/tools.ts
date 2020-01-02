import { Response } from 'http-client'

export const replaceUrlParams = (
	value: string,
	params: Record<string, string>
) => {
	return Object.keys(params).reduce((prev, param) => {
		return prev.replace(param, params[param])
	}, value)
}

export const isRequestSuccess = (resp: Response, status: string = 'OK') => {
	return resp.statusText === status
}
