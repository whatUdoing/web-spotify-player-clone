const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpacPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = rootPath => {
	return {
		context: rootPath,

		entry: {
			bundle: './src/frontend/main.tsx'
		},

		output: {
			filename: '[name][hash].js',
			chunkFilename: '[name].chunk.js',
			path: path.resolve(rootPath, 'dist/frontend'),
			publicPath: '/assets/'
		},

		resolve: {
			alias: {
				components: path.resolve(rootPath, 'src/front/components/')
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
							loader: 'babel-loader'
						}
					]
				},
				{
					test: /\.less$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'less-loader'
					]
				},
				{
					test: /\.css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader']
				},
				{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/'
							}
						}
					]
				}
			]
		},

		optimization: {
			splitChunks: {
				chunks: 'all'
			},
			usedExports: true,
			minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
		},

		plugins: [
			new CleanWebpackPlugin({
				root: rootPath
			}),
			new HtmlWebpacPlugin({
				template: './src/frontend/index.html',
				filename: './index.html'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			})
		]
	}
}
