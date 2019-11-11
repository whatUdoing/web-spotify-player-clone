const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpacPlugin = require('html-webpack-plugin')

module.exports = rootPath => {
	return {
		context: rootPath,

		entry: {
			bundle: './src/web/frontend/main.tsx'
		},

		output: {
			filename: '[name][hash].js',
			chunkFilename: '[name].chunk.js',
			path: path.resolve(rootPath, 'dist/web/frontend'),
			publicPath: '/assets/'
		},

		resolve: {
			alias: {
				components: path.resolve(rootPath, 'src/web/front/components/')
			},
			extensions: ['.ts', '.tsx', '.js']
		},

		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'ts-loader'
						}
					]
				},
				{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
			]
		},

		optimization: {
			splitChunks: {
				chunks: 'all'
			},
			usedExports: true
		},

		plugins: [
			new CleanWebpackPlugin({
				root: rootPath
			}),
			new HtmlWebpacPlugin({
				template: './src/web/frontend/index.html',
				filename: './index.html'
			})
		]
	}
}
