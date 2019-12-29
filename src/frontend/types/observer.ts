export interface IObserver {
	subscribe(event: IEvent, callback: EventCallback): void
	dispatch(event: IEvent, async: boolean): void
}

export type IEvent = {
	name: string
}

export type EventCallback = (event: EventObject) => void

export type EventObject = {
	event: IEvent
	payload?: any
}
