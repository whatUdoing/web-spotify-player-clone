import { useEffect, useState } from 'react'
import { ServiceType } from 'services'
import axios from 'axios'

export const useServiceRequest: <R, E>(
	service: ServiceType,
	method: string,
	requestOptions?: Array<any>,
	conditionVariable?: any
) => [boolean, R, E] = (
	service,
	method,
	requestOptions = [],
	conditionVariable
) => {
	const [response, setResponse] = useState()
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState()

	useEffect(() => {
		let mounted = true
		const cancelToken = axios.CancelToken.source()
		;(async () => {
			try {
				const [response, error] = await service[method](
					...requestOptions,
					cancelToken
				)

				if (mounted) {
					setResponse(response)
					setError(error)
					setLoading(false)
				}
			} catch (error) {
				if (mounted) {
					setError(error)
				}
			}
		})()

		return () => {
			mounted = false

			if (cancelToken) {
				cancelToken.cancel()
			}
		}
	}, [conditionVariable])

	return [isLoading, response, error]
}
