import { Dispatch } from 'redux'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { IObserver } from 'classes'
import { UserAuthenticatedEvent } from '../events/event-user-auth'
import { userAuthenticated } from './user-auth'

export const setupUserSubscribers = ({ dispatch }: { dispatch: Dispatch }) => {
	const EventBus = <IObserver>Container.get('event-bus')

	EventBus.subscribe(UserAuthenticatedEvent, userAuthenticated(dispatch))
}

/**
 * This is only the concept i was thinking about. So the idea is to have subscribers who can
 * do something based on some actions that occured. For example if user was succesfully
 * authenticated, we would trigger the event from reducers eg 'Authenticated' and some other
 * part of code can subscribe for this events. Ikd if its good that I wont use it globaly.
 * One thing I am worry about is that in this idea i have to trigger event from reducer
 * eg:
 * if (isAuth) {
 *      requestAnimationFrame(() => {
 *          EventBus.dispatch(UserAuthenticatedEvent, true)
 *      })
 * }
 *
 * so automatically reducer wont be pure.
 * Right now this actions are handled in middewares.
 */
