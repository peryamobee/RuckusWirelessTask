/**
 * Created by pery on 31/01/2016.
 */
require('./dualTimer.scss');

function timerController($scope, $location, Loger, Timer){

    var player1 = 'player1';
    var player2 = 'player2';
    var currentPlayer = player1;
    var startingTime = null;

    var context = $scope.context;

    $scope.switchPlayer = switchPlayer;
    $scope.Loger = Loger;

    function switchPlayer(){
        context.timer.start();
        var now = context.timer.getDuration();
        if( startingTime ){
            Loger.add({
                [currentPlayer]:{
                    duration:startingTime.subtract(now).format('mm [min] ss [sec]'),
                    startTime:now.format()
                }
            });
        }
        currentPlayer = (currentPlayer == player1)?player2: player1;
        startingTime = moment.duration(now);
    }

}

module.exports.stateConfig = {
    name:"dual",
    url:"/dual",
    abstract:false,
    template: require("./dualTimer.html"),
    controller: timerController
};