/**
 * Created by pery on 31/01/2016.
 */
require('./simpleTimer.scss');

function timerController($scope, $location, $timeout){
    if('autostart' in $location.search()){
        $timeout(function () {
            $scope.timerCtrl.start();
        })

    }

}

module.exports.stateConfig = {
    name:"timer",
    url:"/timer",
    abstract:false,
    template: require("./simpleTimer.html"),
    controller: timerController
};