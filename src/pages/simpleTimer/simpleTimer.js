/**
 * Created by pery on 31/01/2016.
 */
require('./simpleTimer.scss');

function timerController(){

}

module.exports.stateConfig = {
    name:"timer",
    url:"/timer",
    abstract:false,
    template: require("./simpleTimer.html"),
    controller: timerController
};