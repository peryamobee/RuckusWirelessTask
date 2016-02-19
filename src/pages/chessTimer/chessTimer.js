/**
 * Created by pery on 31/01/2016.
 */
require('./chessTimer.scss');

function timerController($scope, TimeLogger, Timer, context){

    const PLAYER_1 = 'player1'
        ,PLAYER_2 = 'player2'
        ;
    var index = -1,
        timers = [new Timer('10:00:00'),new Timer('10:00:00')];

    var players = $scope.players =  [{
            name:PLAYER_1,
            timer: timers[0],
            timeLogger: new TimeLogger( timers[0] ),
            get active(){
                return this.timer.state.start;
            }
        },{
            name:PLAYER_2,
            timer: timers[1],
            timeLogger: new TimeLogger( timers[1] ),
            get active(){
                return this.timer.state.start;
            }
        }]
        ;
    

    function nextPlayer(val){
        val =(++index) % players.length ;
        return  players[ val ];
    }

    $scope.switchPlayer = switchPlayer;
    $scope.resetTimers = resetTimers;
    $scope.pauseTimers = pauseTimers;

    var closeLog = angular.noop;
    var player = nextPlayer();
    timers.forEach(function (timer) {
        timer.onUpdate(function () {
          closeLog();
        })
    });

    $scope.$watch('context.duration', function (nv) {
        players.forEach(function (p) {
            p.timer.setDuration(nv);
        })
    });

    function switchPlayer(){
        player.timer.pause();
        closeLog();
        player.active = false;

        player = nextPlayer();
        player.timer.start();
        player.active = true;
        closeLog = player.timeLogger.createLog( player.name );
    }

    function resetTimers(){
        players.forEach(function (p) {
            p.timer.reset();
            p.timeLogger.clear();
        })
    }

    function pauseTimers(){
        players.forEach(function (p) {
            p.timer.pause();
        })
    }

}

module.exports.stateConfig = {
    name:"chess",
    url:"/chess",
    abstract:false,
    template: require("./chessTimer.html"),
    controller: timerController
};