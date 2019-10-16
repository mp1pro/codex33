
/*module.exports = {
	entry: './client.js',
	output: {
		filename: 'bundle.js',
		path: 'public'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,

                use: {
                    loader: "babel-loader"
                }
			}
		]
	}
};*/
module.exports = {
    mode: 'production',
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: '/var/www/html/codex33/public'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};