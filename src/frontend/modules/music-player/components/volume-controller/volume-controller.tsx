import React, { useState, SyntheticEvent, useContext } from 'react'
import {
	PlayerContext,
	PlayerContextType
} from '../../local-store/player-context'
import InputRange from '../../../../components/input-range/input-range'

const VolumeController = () => {
	const { setVolume } = useContext<PlayerContextType>(PlayerContext)
	const [value] = useState(1)

	return <InputRange initialValue={value} max={2} onChange={setVolume} />
}

export default VolumeController
