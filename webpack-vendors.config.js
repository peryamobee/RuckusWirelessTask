const config = require('./webpack.config.js');

config.entry = {
    vendors:'./src/vendors.js'
};

config.plugins.splice(-1,1); // remove HtmlWebpackPlugin
config.watch = false;

module.exports = config;