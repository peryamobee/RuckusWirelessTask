/**
 * Created by pery on 31/01/2016.
 */
require('./TimerPage.scss');
module.exports = angular.module(__filename, [
    require('common/timer.drv/timer.drv.js').name
]);

function timerController(){

}

module.exports.stateConfig = {
    name:"timer",
    url:"/timer",
    abstract:false,
    template: require("./timerPage.html"),
    controller: timerController
};