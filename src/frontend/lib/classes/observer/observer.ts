import { IObserver, IEvent, EventCallback, EventObject } from 'classes'

export default class Observer implements IObserver {
	handlers: Record<string, Array<EventCallback>>

	constructor() {
		this.handlers = {}
	}

	subscribe(event: IEvent, callback: EventCallback) {
		if (!this.hasEvent(event)) {
			this.handlers[event.name] = []
		}

		this.handlers[event.name].push(callback)
	}

	hasEvent(event: IEvent) {
		return this.handlers[event.name]
	}

	dispatch(event: IEvent, async: boolean = false) {
		if (this.hasEvent(event)) {
			const callbacks: Array<EventCallback> = this.handlers[event.name]

			callbacks.forEach(callback => {
				if (async) {
					requestAnimationFrame(() => {
						callback({
							event
						})
					})
				} else {
					callback({
						event
					})
				}
			})
		}
	}
}
