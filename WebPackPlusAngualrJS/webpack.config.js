var webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/Scripts',
        filename: 'app.bundle.js'
    },
    devServer: { inline: true },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
};