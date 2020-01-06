import React, { useEffect, useState } from 'react'
import { Container } from '../../utils/classes/dependency-injector/dependency-injector'
import { ServiceType, IUserService, MyDashboardResponse } from 'types/services'
import { PreviewSectionObject } from 'types/components'
import { processResponse } from './helpers'
import PreviewSection, {
	PreviewHeader,
	PreviewList
} from '../../components/preview/preview-section/preview-section'
import { useServiceRequest } from '../../utils/hooks/use-service-request'

const Home = () => {
	const UserService = Container.get('user-service') as IUserService
	const [items, setItems] = useState<Array<PreviewSectionObject>>([])
	const [isLoading, response, error] = useServiceRequest<
		MyDashboardResponse,
		Error
	>(UserService as ServiceType, 'getUserDashboard')

	useEffect(() => {
		if (response?.items?.length) {
			setItems(processResponse(response).items)
		}
	}, [response])

	return (
		<div>
			<h1>Home Page</h1>
			{items.map(pagingObject => {
				return (
					<PreviewSection
						key={pagingObject.id}
						items={pagingObject.items}
					>
						<PreviewHeader>{pagingObject.title}</PreviewHeader>
						<PreviewList />
					</PreviewSection>
				)
			})}

			{/* TODO: slider, later to implement */}
			{/* {items.map((pagingObjectw: MyDashboardPagingObject) => {
				return (
					<Slider key={pagingObject.href} title={pagingObject.title}>
						{pagingObject.items.map((item: PreviewItemObject) => {
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
			})} */}
		</div>
	)
}

export default Home
