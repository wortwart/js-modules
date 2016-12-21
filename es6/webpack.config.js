module.exports = {
	entry: './app-api.js',
	output: {
		path: __dirname,
		filename: 'bundle-api.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
		]
	}
}