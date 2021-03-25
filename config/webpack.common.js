const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, '../src/App.js'),
	output:
	{
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	devtool: 'source-map',
	plugins:
		[
			new CopyWebpackPlugin({
				patterns: [
					{ from: path.resolve(__dirname, '../src/assets') }
				]
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, '../src/index.html'),
				minify: true
			})
		],
	module:
	{
		rules:
			[
				{
					test: /\.(html)$/,
					loader: 'html-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						"style-loader",
						"css-loader",
						"sass-loader"
					]
				},
				{
					test: /\.(jpg|png|gif|svg)$/,
					use:
						[
							{
								loader: 'file-loader',
								options:
								{
									outputPath: 'assets/images/'
								}
							}
						]
				},
				{
					test: /\.(ttf|eot|woff|woff2)$/,
					use:
						[
							{
								loader: 'file-loader',
								options:
								{
									outputPath: 'assets/fonts/'
								}
							}
						]
				},
			]
	}
}
