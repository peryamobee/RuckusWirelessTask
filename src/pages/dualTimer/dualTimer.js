/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, TimeLogger, Timer, context){
    var  timer = $scope.timer = new Timer(context.duration);
    context.autoStart && timer.start();
    $scope.$watch('context.duration', timer.setDuration.bind(timer));

    var index = -1,
        players = [context.player1Name,context.player2Name]
    ;

    function nextPlayer(val){
        val =(++index) % players.length ;
        return  players[ val ];
    }

    $scope.switchPlayer = switchPlayer;
    var timeLogger = $scope.timeLogger = TimeLogger( timer );

    var closeLog = angular.noop;
    function switchPlayer(){
        timer.start();
        closeLog();
        closeLog = timeLogger.createLog( nextPlayer());
    }


}

module.exports.stateConfig = {
    name:"dual",
    url:"/dual",
    abstract:false,
    template: require("./dualTimer.html"),
    controller: timerController
};