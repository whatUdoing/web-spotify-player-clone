import { AxiosInstance, AxiosResponse } from 'axios'

/**
 * For simplicy http we use axios intefaces to define our http-client adapter
 * in production i would be define it by mysel
 */
export interface IHttpClient extends AxiosInstance {}

export type Response = AxiosResponse
