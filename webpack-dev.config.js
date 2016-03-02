const config = require('./webpack.config.js');

config.entry = {
    TimerApp:'./src/index.js'
};

config.watch = true;

module.exports = config;