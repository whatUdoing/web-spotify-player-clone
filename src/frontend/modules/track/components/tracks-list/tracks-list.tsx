import { TrackObjectFull, TrackObjectSimplified } from 'services'
import React from 'react'
import { converMsToMin } from '../../../../lib/helpers/numbers/numbers'

type Props = {
	tracks: Array<TrackObjectFull | TrackObjectSimplified>
}

const TracksList = ({ tracks }: Props) => {
	return (
		<>
			<ul className="tracks-list">
				{tracks.map(
					(track: TrackObjectFull | TrackObjectSimplified) => {
						return (
							<li className="tracks-list__item" key={track.id}>
								<div className="row">
									<div className="col-xs">
										<span className="color_light-1">
											{track.name}
										</span>
									</div>

									<div className="col-xs-4 align_right">
										<span className="color_light-2 size_s">
											{converMsToMin(track.duration_ms)}
										</span>
									</div>
								</div>

								<div className="row">
									<div className="col-xs">
										<ul className="color_light-2 size_xxs list list_inline list_inline-doted">
											{track.artists.map(artist => (
												<li key={artist.id}>
													{artist.name}
												</li>
											))}
										</ul>
									</div>
								</div>
							</li>
						)
					}
				)}
			</ul>
		</>
	)
}

export default TracksList
