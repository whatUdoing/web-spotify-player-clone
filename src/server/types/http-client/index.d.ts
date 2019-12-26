declare module 'http-client' {
	/**
	 * Client interface use axios interface. For simplify
	 */
	import { AxiosResponse, AxiosRequestConfig } from 'axios'

	export type Response = AxiosResponse
	export type RequestOptions = AxiosRequestConfig

	export interface IHttpClient {
		get(url: string, options?: RequestOptions): Promise<Response>
		post(
			url: string,
			body?: object | string,
			options?: RequestOptions
		): Promise<Response>
	}
}
