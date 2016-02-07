/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, $location, $timeout, Timer){
    var context = $scope.context;
    var timer = context.timer = new Timer(context.duration);

    if('autostart' in $location.search()){
        timer.start();
    }
    $scope.$watch('context.duration', function (nv) {
        timer.setDuration(nv);
    })

}

module.exports.stateConfig = {
    name:"dual",
    url:"/dual",
    abstract:false,
    template: require("./dualTimer.html"),
    controller: timerController
};