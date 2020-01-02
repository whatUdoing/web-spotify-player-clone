import { useEffect, useState } from 'react'
import { ServiceType } from 'types/services'
import axios from 'axios'

export const useServiceRequest: <R, E>(
	service: ServiceType,
	method: string,
	requestOptions?: object
) => [boolean, R, E] = (service, method, requestOptions = {}) => {
	const [response, setResponse] = useState()
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState()
	const cancelToken = axios.CancelToken.source()

	useEffect(() => {
		;(async () => {
			try {
				const [response, error] = await service[method](requestOptions)

				setResponse(response)
				setError(error)
				setLoading(false)
			} catch (error) {
				setError(error)
			}
		})()

		return () => {
			if (cancelToken) {
				cancelToken.cancel()
			}
		}
	}, [])

	return [isLoading, response, error]
}
