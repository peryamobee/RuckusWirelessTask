/**
 * Created by pery on 29/01/2016.
 */

module.exports  = angular.module('Timer.fct.js')
    .factory('Timer', function () {


        function Timer(){
            ga('create', 'UA-XXXXX-Y', 'auto', 'myTracker');
        }

        Timer.prototype.start = function () {
            ga('create', 'UA-XXXXX-Y', 'auto', 'start timer');
        };

        Timer.prototype.stope = function () {
            ga('create', 'UA-XXXXX-Y', 'auto', 'stop timter');
            //_trackEvent('timer', 'start', time)
        };

        return Timer;
    });