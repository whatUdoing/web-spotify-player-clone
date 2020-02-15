import React, { useEffect, useState } from 'react'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { ServiceType, IUserService, MyDashboardResponse } from 'services'
import { PreviewSectionObject } from 'components'
import { processResponse } from './helpers'
import PreviewSection, {
	PreviewHeader,
	PreviewList
} from '../../../../components/preview/preview-section/preview-section'
import { useServiceRequest } from '../../../../lib/hooks/use-service-request'
import useAuth from '../../../../lib/hooks/use-auth'

const Home = () => {
	const [isAuthLoading, auth] = useAuth()
	const UserService = Container.get('user-service') as IUserService
	const [items, setItems] = useState<Array<PreviewSectionObject>>([])
	const [isLoading, response] = useServiceRequest<MyDashboardResponse, Error>(
		UserService as ServiceType,
		'getUserDashboard'
	)

	useEffect(() => {
		if (response?.items?.length) {
			setItems(processResponse(response).items)
		}
	}, [response])

	return (
		<div>
			<h1>Home</h1>

			{auth && !auth.isAuth && <p>Please log in to see this content</p>}

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
		</div>
	)
}

export default Home
