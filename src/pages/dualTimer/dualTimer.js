/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');
/*@ngInject*/
function timerController($scope, TimeLogger, Timer, context){
    /* init page */
    var  timer = $scope.timer = new Timer(context.duration);

    $scope.$watch('context.duration', timer.setDuration.bind(timer));

    /* players */
    var index = -1,
        players = [context.players1Name, context.players2Name]
    ;

    function nextPlayer(val){
        val =(++index) % players.length ;
        return  players[ val ];
    }

    $scope.switchPlayer = switchPlayer;
    var timeLogger = $scope.timeLogger = TimeLogger( timer );

    var closeLog = angular.noop;
    function switchPlayer(){
        if( timer.state.setted ){
            timer.start();
            closeLog(true);
            closeLog = timeLogger.createLog( nextPlayer());
        }
    }

    timer.onReset(function () {
       timeLogger.clear();
    });
    timer.onUpdate(function () {
        closeLog();
    });
    context.autoStart && timer.start();


    /* google analytic */
    ga('Timer.send', 'pageview', 'Dual Page');
}

module.exports.stateConfig = {
    name:"dual",
    url:"/dual",
    abstract:false,
    template: require("./dualTimer.html"),
    controller: timerController
};