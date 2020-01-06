import RouteManager from './route-manager'
import { connect } from 'react-redux'
import { RootStateShape } from 'types/redux'

const mapState = (state: RootStateShape) => {
	const routes = state.router.routes

	return {
		routes: state.router.mainRoutes.map(routeId => routes[routeId])
	}
}

export default connect(mapState)(RouteManager)
