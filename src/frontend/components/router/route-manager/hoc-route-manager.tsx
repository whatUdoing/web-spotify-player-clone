import RouteManager from './route-manager'
import { connect } from 'react-redux'
import { RootStateShape } from 'redux-store'

const mapState = (state: RootStateShape) => {
	const routes = state.router.routes

	return {
		routes: state.router.mainRoutes.map(routeId => routes[routeId])
	}
}

export default connect(mapState)(RouteManager)
