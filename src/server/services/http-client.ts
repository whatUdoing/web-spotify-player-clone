import { IHttpClient, RequestOptions } from 'http-client'

export default class HttpClient {
	client: IHttpClient

	constructor(client: IHttpClient) {
		this.client = client
	}

	get(url: string, options: RequestOptions = {}) {
		return this.client.get(url, options)
	}

	post(url: string, body: object = {}, options: RequestOptions = {}) {
		return this.client.post(url, body, options)
	}

	put(url: string, body: object = {}, options: RequestOptions = {}) {
		return this.client.put(url, body, options)
	}
}
