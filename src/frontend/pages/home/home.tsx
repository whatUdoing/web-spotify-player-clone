import React, { useEffect, useState } from 'react'
import { Container } from '../../utils/classes/dependency-injector'
import {
	ServiceType,
	IUserService,
	DashboardItemTypes,
	MyDashboardResponse,
	ServiceResponse
} from 'types/services'
import axios, { CancelToken, CancelTokenSource } from 'axios'
import Slider from '../../components/slider/slider'
import { PreviewItemObject } from 'types/components'
import PreviewItem from '../../components/preview-item/preview-item'

const useServiceRequest: <R, E>(
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

const Home = () => {
	const UserService = Container.get('user-service') as IUserService
	const [items, setItems] = useState([])
	const [isLoading, response, error] = useServiceRequest<
		MyDashboardResponse,
		Error
	>(UserService as ServiceType, 'getUserDashboard')

	useEffect(() => {
		if (response?.items?.length) {
			setItems(response.items as never[])
		}
	}, [response])

	return (
		<div>
			<h1>Home Page</h1>

			{response.items.map(collectionItem => {
				return (
					<Slider key={collectionItem.href}>
						{items.map((item: PreviewItemObject) => {
							return (
								<PreviewItem
									key={item.id}
									item={{
										name: item.name,
										description: item.description,
										image: {
											//item.images.length > 2 ? item.images[2] : ''
											url:
												'https://omarrr.com/wp-content/uploads/2012/03/github_angry_unicorn_300.png'
										}
									}}
								/>
							)
						})}
					</Slider>
				)
			})}
		</div>
	)
}

export default Home
