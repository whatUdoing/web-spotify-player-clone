import { Response } from 'types/http-client'

export interface IUserApiClient {
	isAuthenticated(): Promise<Response>
	logout(): Promise<Response>
	getUserProfile(): Promise<Response>
}
