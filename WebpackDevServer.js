var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var compiler = webpack({
   entry: {
       app: ["./app/app.js"]
   },
   output: {
       path: __dirname + "/../resources/public/",
       filename: "index.js"
   },
   devtool: 'source-map',
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
       alias: {
           reducers: 'app/reducers.js',
           404: 'app/404.js',
           'rest-client': 'service/rest-client.js'
       }
   },
   plugins: [
       new ExtractTextPlugin("index.css", {
           allChunks: true
       })
   ]
});

var server = new WebpackDevServer(compiler, {
    contentBase: "../resources/public",
    hot: true,
    proxy: {
        '/view/*': {
            target: 'http://127.0.0.1:8081',
            secure: false
        },
        '/service/*': {
            target: 'http://127.0.0.1:8081',
            secure: false
        }
    },
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
        colors: true
    }
});
server.listen(8080, "localhost", function() {
    console.log("Webpack dev server is started.");
})