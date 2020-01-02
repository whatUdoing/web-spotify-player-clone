import { ImageObject } from './services'

/**
 * Preview-item
 */

export type PreviewItemObject = {
	id: string
	path: string
	name?: string
	image?: ImageObject
	description?: string
}

export type PreviewSectionObject = {
	href: string
	title: string
	type: string
	items: Array<PreviewItemObject>
}

export type ComponentEventObject = {
	reactEvent: React.SyntheticEvent<Element, Event>
	payload: any
}

export type ComponentEventHandler = (evt: ComponentEventObject) => void
