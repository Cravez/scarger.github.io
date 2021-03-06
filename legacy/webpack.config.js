var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname,''),
        filename: 'build/transpiled.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query:{
                    presets: ['es2016','react']
                }
            }
        ]
    }
}