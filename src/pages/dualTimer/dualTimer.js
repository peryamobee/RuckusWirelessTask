/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, Logger, Timer, context){
    var  timer = $scope.timer = context.timer;
    const PLAYER_1 = 'player1'
          ,PLAYER_2 = 'player2'
    ;
    var index = -1,
        player = [PLAYER_1,PLAYER_2]
    ;

    function nextPlayer(val){
        val =(++index) % player.length ;
        return  player[ val ];
    }

    $scope.switchPlayer = switchPlayer;
    var timeLogger = $scope.timeLogger = Logger( timer );

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