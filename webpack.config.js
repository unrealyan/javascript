var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: {
        app: ["./app/app.js"]
    },
    output: {
        path: __dirname + "/../resources/public/",
        filename: "index.js"
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: "babel",
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.css'],
        alias: {
            reducers: 'app/reducers.js',
            404: 'app/404.js',
            'rest-client': 'service/rest-client.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        new ExtractTextPlugin("index.css", {
            allChunks: true
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            unused: true,
            dead_code: true,
            warnings: false
          }
        })
    ]
};