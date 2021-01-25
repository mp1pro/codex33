
let path = require('path');

module.exports = {
    mode: 'production',
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './public')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000 // in bytes
                    }
                }]
            },
            
        ]
    }
};
