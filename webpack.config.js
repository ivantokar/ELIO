const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: SRC_DIR + '/index.js',
	output: {
		path: DIST_DIR,
		filename: 'index.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: DIST_DIR,
		stats: 'errors-only',
		compress: true,
		hot: true,
		port: 8080
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'elio:Sass Framework',
			minify: {
				collapseWhitespace: true
			},
			hash: true
		}),
		new ExtractTextPlugin({
			filename: 'all.css',
			disable: false,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};