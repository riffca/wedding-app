//намудрил с extractTextPlugin, в итоге отказался

const path = require('path');
const webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


var php = true;
var NODE_ENV = process.env.NODE_ENV || 'development';

var public = php ? path.join(__dirname, 'php', 'public') : path.join(__dirname, 'backend');
var frontend = path.join(__dirname, 'frontend');


module.exports = {

    context: frontend,
    entry: {
        app: './app'
    },

    output: {
        path: public,
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.css', '.scss', '.html', '.json', '.vue']
    },

    devtool: NODE_ENV === 'development' ? 'inline-cheap-module-source-map' : null,

    module: {

        loaders: [{
                test: /\.js$/,
                include: frontend,
                loader: 'babel?presets[]=es2015'
            }, {
                test: /\.json$/,
                loader: 'json'
            },

            {
                test: /\.scss$/,
                loader: NODE_ENV === 'development' ? 'style!css!sass?sourceMap' : 'style!css!sass'/*ExtractTextPlugin.extract('css!autoprefixer?browsers=last 2 versions!sass')*/

            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },

    vue: {
        loader: {
            js: 'babel?presets[]=es2015'
        }
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        //new ExtractTextPlugin('style.css')
        new webpack.ProvidePlugin({
            //$: 'jquery',
            Vue: 'vue',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};


if (NODE_ENV != 'development') {
   /* module.exports.plugins.push(
        new ExtractTextPlugin('style.css')
        );*/
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

if (!php) {

    module.exports.devServer = {
        contentBase: public,
        proxy: {
            '*': 'http://localhost:3000'
        }
    };

} else if (php && NODE_ENV === 'development') {

    // needed to make request-promise work
    module.exports.node = {
        net: 'empty',
        tls: 'empty'
    };


    module.exports.plugins.push(
        // reloads browser when the watched files change
        new BrowserSyncPlugin({
            // use existing Apache virtual host
            proxy: 'http://wedding.local/',
            //tunnel: true,
            // watch the built files and the index file
            files: ['./php/public/index.php', './php/public/app.js']
        })
    );

}



