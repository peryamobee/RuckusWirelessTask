/**
 * Created by pery on 31/01/2016.
 */
require('./simpleTimer.scss');

function timerController($scope, $location, $timeout, Timer, context){
   var timer = $scope.timer = new Timer(context.duration);
    context.autoStart && timer.start();
   $scope.$watch('context.duration', timer.setDuration.bind(timer));

    /* google analytic */
    ga('Timer.send', 'pageview', 'simple Page');
}

module.exports.stateConfig = {
    name:"timer",
    url:"/timer",
    abstract:false,
    template: require("./simpleTimer.html"),
    controller: timerController
};