var webpack = require ("webpack")
var path = require ("path")

var jsPath = path.resolve (__dirname, "js")
var publicPath = path.resolve (__dirname, "")

module.exports = {
	entry: [
		path.resolve (jsPath, "index.js")
	],
	output: {
		filename: "bundle.js",
		library: "ReactRouter",
		libraryTarget: "umd",
		path: publicPath,
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{ test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=100000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader!resolve-url" },
			{ test: /\.scss$/, loader: "style!css!sass!resolve-url!sass?sourceMap" },
			{ test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
			{ test: /\.json$/, loader: "json-loader" }
		]
	},
	devServer: {
		contentBase: "./",
		stats: {
			colors: true
		},
		proxy: false,
		historyApiFallback: true
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify (process.env.NODE_ENV || "dev"),
			}
		})
	]
}
