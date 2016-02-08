/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, $timeout,Loger){
    if('autostart' in $location.search()){
        $timeout(function () {
            $scope.timerCtrl.start();
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