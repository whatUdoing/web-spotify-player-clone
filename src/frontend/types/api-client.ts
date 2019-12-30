import { Response } from 'types/http-client'
import { CancelTokenSource } from 'axios'

export interface IUserApiClient {
	isAuthenticated(cancelToken?: CancelTokenSource): Promise<Response>
	logout(): Promise<Response>
	getUserProfile(): Promise<Response>
	getUserDashboard(): Promise<Response>
}
