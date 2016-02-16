/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, $location, Loger, Timer){

    var player1 = 'player1';
    var player2 = 'player2';
    var currentLog = null;
    var startingTime = null;

    var context = $scope.context;

    $scope.switchPlayer = startTimer;
    $scope.Loger = Loger;

    function startTimer(){
        context.timer.start();
        startingTime = moment.duration( context.timer.getDuration() );
        currentLog = {
            name: player1,
            startTime: startingTime.format()
        };
        Loger.add( currentLog );

        $scope.switchPlayer = switchPlayer;
    }

    function nextPlayer(){
        nextPlayer.prevPlayer = nextPlayer.prevPlayer?player1:player2;
        return nextPlayer.prevPlayer;
    }

    function switchPlayer(){
        var prevLog = currentLog;
        var now = context.timer.getDuration();
        prevLog.endTime = now.format();
        prevLog.duration = startingTime.subtract(now).format('mm [min] ss [sec]');
        startingTime = moment.duration( now ); // make a copy;

        currentLog = {
            name:player1,
            startTime:now
        };
        Loger.add(currentLog);

        //currentPlayer = (currentPlayer == player1)?player2: player1;

    }

}

module.exports.stateConfig = {
    name:"dual",
    url:"/dual",
    abstract:false,
    template: require("./dualTimer.html"),
    controller: timerController
};