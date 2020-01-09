import { Response, QueryString } from 'http-client'
import { ICacheManager, CacheSettings, CacheItem } from 'classes'

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
	cacheManager: ICacheManager<Response>,
	url: string,
	queryParams?: QueryString<string>
): CacheItem<Response> | null => {
	const fullUrl = `${url}${
		queryParams ? `?${strigifyQueryParams(queryParams)}}` : ''
	}`
	return cacheManager.get(fullUrl)
}

export const cacheResponse = (
	cacheManager: ICacheManager<Response>,
	resp: Response,
	settings: CacheSettings = {
		expiresIn: 60
	}
) => {
	// const CacheManager = <ICacheManager<Response>>(
	// 	Container.get('request-cache-manager')
	// )

	try {
		cacheManager.add(resp.request.responseURL, resp, settings)
	} catch {}

	return resp
}
