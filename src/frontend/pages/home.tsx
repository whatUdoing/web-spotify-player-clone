import React, { useEffect, useState } from 'react'
import PreviewItem from '../components/preview-item/preview-item'
import { Container } from '../utils/classes/dependency-injector'
import { IUserService } from 'types/user-service'
import axios, { CancelToken, CancelTokenSource } from 'axios'
import Slider from '../components/slider/slider'

const Home = () => {
	const [items, setItems] = useState([])
	const cancelToken = axios.CancelToken.source()

	useEffect(() => {
		;(async () => {
			const UserService = Container.get('user-service') as IUserService

			try {
				// TODO add types
				const [response] = await UserService.getUserDashboard(
					cancelToken
				)
				setItems(response.content.items[0].items)
				console.log('me dashboard', response)
			} catch (err) {
				//todo handle error
			}
		})()

		return () => {
			if (cancelToken) {
				cancelToken.cancel()
			}
		}
	}, [])
	return (
		<div>
			<h1>Home Page</h1>
			<Slider>
				{items.map(item => {
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
		</div>
	)
}

export default Home
