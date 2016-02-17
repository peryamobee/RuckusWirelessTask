/**
 * Created by pery on 31/01/2016.
 */
require('./chessTimer.scss');

function timerController($scope, $location, $timeout, Timer){
   /* var context = $scope.context;
    var timer = context.timer = new Timer(context.duration);

    if('autostart' in $location.search()){
        timer.start();
    }
    $scope.$watch('context.duration', function (nv) {
        timer.setDuration(nv);
    })
*/
}

module.exports.stateConfig = {
    name:"chess",
    url:"/chess",
    abstract:false,
    template: require("./chessTimer.html"),
    controller: timerController
};