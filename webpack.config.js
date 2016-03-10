/**
 * Created by pery on 30/01/2016.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var exportRunTimeVariable = new webpack.DefinePlugin({
    MODE: {
        production: process.env.NODE_ENV === 'production'
    }
});

var extractSCSS =  new ExtractTextPlugin("[name].css");

module.exports = {
    watch: true,
    //stats:'simple',
    devtool: 'source-map', /*devtool: 'inline-source-map'*/
    context: __dirname, /*for node key*/
    node:{
        __filename:true,
        __dirname:true
    },
    resolve: {
        root:[
            path.resolve('src')
            ,path.resolve('node_modules')
            ,path.resolve('bower_components')
        ]
        //root: __dirname + '/src'
    },
    entry:{
        vendors:'./src/vendors.js'
        ,TimerApp:'./src/index.js'
    },
    output:{
        path: path.join(__dirname,'build'),
        //publicPath: "/assets/",
        filename:'[name].js'
    },
    module:{
        loaders:[
            /*
                test: A condition that must be met
                exclude: A condition that must not be met
                include: A condition that must be met
                loader: A string of "!" separated loaders
                loaders: A array of loaders as string
            */
            {test:/\.css$/,
                loader:extractSCSS.extract('style-loader?sourceMap','css-loader!sass-loader')},

            {test: /\.scss$/,
                loader: extractSCSS.extract('style-loader?sourceMap','css-loader!sass-loader')},

            {test: /\.js$/,
                loader: 'ng-annotate',
                exclude: /node_modules|bower_components/},

            {test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader : 'url-loader?limit=10000&name="fonts/[name].[ext]?[hash]"'
            },
            //{test: /index\.html$/,
            //    loader : 'file-loader?name=[name].[ext]'
            //},

            {test: /\.html$/,
                loader: 'raw'
                ,exclude:[/index.html/]},

            {test: /\.json/,
                loader: 'json'}

        ]
    },
    plugins: [
        extractSCSS,
        exportRunTimeVariable,
        new ngAnnotatePlugin({
            add: true
            // other ng-annotate options here
        }),
        new HtmlWebpackPlugin({
            title: 'Timer Task'
            //,filename: ''
            ,template: 'src/index.html'
        })
    ]
};
