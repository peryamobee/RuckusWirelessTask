require('./chessTimer.scss');
/*@ngInject*/
function timerController($scope, TimeLogger, Timer, context){

   var index = -1,
        timers = [new Timer(context.duration),new Timer(context.duration)];




    var players = $scope.players =  [{
            name:context.players1Name,
            timer: timers[0],
            timeLogger: new TimeLogger( timers[0] ),
            get active(){
                return this.timer.state.start;
            }
        },{
            name:context.players2Name,
            timer: timers[1],
            timeLogger: new TimeLogger( timers[1] ),
            get active(){
                return this.timer.state.start;
            }
        }];

    $scope.$watch('context.duration', function(newDuration) {
        timers.forEach(function (timer) {
            timer.setDuration(newDuration)
        });
    });

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

    function nextPlayer(){
        return  players[ (++index) % players.length ];
    }

    function switchPlayer(){
        close( player );
        player = nextPlayer();
        start( player );
    }

    function start(player){
        if( player.timer.state.setted ) {
            player.timer.start();
            //player.active = true;
            closeLog = player.timeLogger.createLog(player.name);
        }
    }

    function close(player){
        player.timer.pause();
        closeLog(true);
        player.active = false;
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
    context.autoStart && start(player);

    /* google analytic */
    ga('Timer.send', 'pageview', 'Chess Page');
}

module.exports.stateConfig = {
    name:"chess",
    url:"/chess",
    abstract:false,
    template: require("./chessTimer.html"),
    controller: timerController
};