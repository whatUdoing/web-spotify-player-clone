declare module 'router' {
	import {
		LazyExoticComponent,
		ReactNode,
		FunctionComponent,
		ReactType
	} from 'react'

	export type RouteObject = {
		key: string
		path: string
		name: string
		component:
			| LazyExoticComponent<() => JSX.Element>
			| ReactNode
			| FunctionComponent<{}>

		withAuth?: boolean
		mainNav?: boolean
		exact?: boolean
		icon?: string
		routes?: Array<RouteObject>
	}
}
