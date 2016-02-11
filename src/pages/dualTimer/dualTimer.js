/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, $location, Loger, Timer){

    var player1 = 'player1';
    var player2 = 'player2';
    var currentPlayer = null;
    var startingTime = null;

    var context = $scope.context;

    $scope.switchPlayer = startTimer;
    $scope.Loger = Loger;

    function startTimer(){
        context.timer.start();
        startingTime = moment.duration( context.timer.getDuration() );
        currentPlayer = {
            name:player1,
            startTime: startingTime.format()
        };
        Loger.add(currentPlayer);

        $scope.switchPlayer = switchPlayer;
    }

    function nextPlayer(){
        nextPlayer.prevPlayer = nextPlayer.prevPlayer?player1:player2;
        return nextPlayer.prevPlayer;
    }

    function switchPlayer(){
        var prevPlayer = currentPlayer;
        var now = context.timer.getDuration();
        prevPlayer.duration = startingTime.subtract(now).format('mm [min] ss [sec]');
        startingTime = moment.duration( now );

        currentPlayer = {
            name:player1,
            startTime:now
        };
        Loger.add(currentPlayer);

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