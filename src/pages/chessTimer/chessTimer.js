/**
 * Created by pery on 31/01/2016.
 */
require('./chessTimer.scss');

function timerController($scope, Logger, Timer, context){

    var  timer = $scope.timer = context.timer;
    const PLAYER_1 = 'player1'
        ,PLAYER_2 = 'player2'
        ;
    var index = -1,
        timers = [new Timer('10:00:00'),new Timer('10:00:00')];

    var players = $scope.players =  [{
            name:PLAYER_1,
            timer: timers[0],
            timeLogger: new Logger( timers[0] )
        },{
            name:PLAYER_2,
            timer: timers[1],
            timeLogger: new Logger( timers[1] )
        }]
        ;

    function nextPlayer(val){
        val =(++index) % players.length ;
        return  players[ val ];
    }

    $scope.switchPlayer = switchPlayer;

    var closeLog = angular.noop;
    var player = nextPlayer();
    function switchPlayer(){
        player.timer.pause();
        closeLog( true );

        player = nextPlayer();
        player.timer.start();
        closeLog = player.timeLogger.createLog( player.name );
    }


}

module.exports.stateConfig = {
    name:"chess",
    url:"/chess",
    abstract:false,
    template: require("./chessTimer.html"),
    controller: timerController
};