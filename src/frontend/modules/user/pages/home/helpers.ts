import { MyDashboardResponse, MyDashboardPagingObject } from 'services'
import { PreviewSectionObject } from 'components'

import {
	mapAlbumObjectToPreviewItem,
	mapArtistObjectToPreviewItem,
	mapPlaylistObjectToPreviewItem,
	mapTrackObjectToPreviewItem
} from '../../../../components/preview/preview-item/lib/data-mappers'

type ProcessedResponse = {
	items: Array<PreviewSectionObject>
}

export const processResponse = (response: MyDashboardResponse) => {
	const responseActions: Record<string, Function> = {
		playlist: mapPlaylistObjectToPreviewItem,
		artist: mapArtistObjectToPreviewItem,
		track: mapTrackObjectToPreviewItem,
		album: mapAlbumObjectToPreviewItem
	}

	const processedItems = response.items.reduce(
		(prev, pagingObject: MyDashboardPagingObject, index: number) => {
			prev.items.push({
				id: index,
				title: pagingObject.title,
				type: pagingObject.type,
				items: pagingObject.items.map(item => {
					return responseActions[pagingObject.type](item)
				})
			})

			return prev
		},
		<ProcessedResponse>{
			items: []
		}
	)

	return processedItems
}
