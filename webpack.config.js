module.exports = {
	devtool: false,
	plugins: [new webpack.SourceMapDevToolPlugin({})],
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		],
	},
	ignoreWarnings: [/Failed to parse source map/],
};
