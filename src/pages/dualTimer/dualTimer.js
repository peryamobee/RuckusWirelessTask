/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, $timeout,Loger){

    var startDuration =
    function addLog(){
        Loger.add({
            player:0,
            duration:
        })
    }
}

module.exports.stateConfig = {
    name:"dual",
    url:"/dual",
    abstract:false,
    template: require("./dualTimer.html"),
    controller: timerController
};