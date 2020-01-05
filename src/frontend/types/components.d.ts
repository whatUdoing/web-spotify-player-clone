import { ImageObject } from './services'

/**
 * Preview-item
 */

export type PreviewItemObject = {
	id: string
	path: string
	type: string
	name?: string
	image?: ImageObject | null
	description?: string
}

export type LazyImageObject = {
	src: string
	title?: string
	alt?: string
}

export type PreviewSectionObject = {
	id: number
	title: string
	type: string
	items: Array<PreviewItemObject>
}

export type ComponentEventObject = {
	reactEvent: React.SyntheticEvent<Element, Event>
	payload: any
}

export type ComponentEventHandler = (evt: ComponentEventObject) => void

export type CoverObject = {
	id: string
	author: string
	image: LazyImageObject
	description: string
	title: string
}
