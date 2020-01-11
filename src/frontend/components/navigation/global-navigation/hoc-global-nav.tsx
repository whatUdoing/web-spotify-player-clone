import { RootStateShape } from 'redux-store'
import { connect } from 'react-redux'
import GlobalNavigation from './global-navigation'

const mapState = (state: RootStateShape) => {
	return {
		navigationItems: state.navigation.main.map(
			routeId => state.router.routes[routeId]
		)
	}
}

export default connect(mapState)(GlobalNavigation)
