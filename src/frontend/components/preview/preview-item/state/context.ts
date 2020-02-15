import React from 'react'
import { PreviewItemObject } from 'components'

export const PreviewItemContext = React.createContext<PreviewItemObject>({
	id: '',
	path: '',
	type: ''
})
