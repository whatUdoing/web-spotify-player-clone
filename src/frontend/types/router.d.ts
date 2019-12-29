import { LazyExoticComponent, ReactNode } from 'react'

export type RouteObject = {
	id: number
	path: string
	name: string
	component: LazyExoticComponent<() => JSX.Element> | ReactNode
	withAuth?: boolean
	exact?: boolean
}
