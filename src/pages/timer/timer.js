/**
 * Created by pery on 31/01/2016.
 */
//module.exports = require("angular").module(__filename, []);

function timerController(){

}

module.exports.stateConfig = {
    name:"timer",
    url:"/timer",
    abstract:false,
    template: require("./timer.html"),
    controller: timerController
};