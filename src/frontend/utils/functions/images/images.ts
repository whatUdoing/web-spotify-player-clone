import { ImageObject } from 'services'

export const getImage = (images: Array<ImageObject>, index: number = 1) => {
	if (!images?.length) return null

	return images.length > index ? images[index] : images[0]
}
