import { Response, QueryString } from 'http-client'
import { Container } from '../../classes/dependency-injector/dependency-injector'
import { ICacheManager, CacheSettings } from 'classes'

export const isResponseSuccess = (
	res: Response,
	statusText = 'OK'
): boolean => {
	return res.statusText.toLowerCase() === statusText.toLowerCase()
}

export const strigifyQueryParams = (
	params: QueryString<string | number> = {}
): string => {
	return Object.keys(params)
		.map(param => `${param}=${params[param]}`)
		.join('&')
}

export const getCachedResponse = (
	url: string,
	queryParams: QueryString<string> = {}
) => {
	const CacheManager = <ICacheManager<Response>>(
		Container.get('request-cache-manager')
	)

	const fullUrl = `${url}?${strigifyQueryParams(queryParams)}`

	return CacheManager.get(fullUrl)
}

export const cacheResponse = (
	resp: Response,
	settings: CacheSettings = {
		expiresIn: 60
	}
) => {
	const CacheManager = <ICacheManager<Response>>(
		Container.get('request-cache-manager')
	)

	try {
		CacheManager.add(resp.request.responseURL, resp, settings)
	} catch {}

	return resp
}
