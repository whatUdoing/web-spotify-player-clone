import { LazyExoticComponent, ReactNode } from 'react'

export type Route = {
	id: number
	path: string
	name: string
	component: LazyExoticComponent<() => JSX.Element> | ReactNode
}
