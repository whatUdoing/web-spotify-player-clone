const merge = require('webpack-merge')
const baseConfig = require('./src/config/webpack/base.config')

module.exports = (env, argv) => {
	const specificConfig = env.production
		? require('./src/config/webpack/prod.config')
		: require('./src/config/webpack/dev.config')

	return merge({}, baseConfig(__dirname), specificConfig)
}
