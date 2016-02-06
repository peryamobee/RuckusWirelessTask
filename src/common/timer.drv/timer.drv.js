/**
 * Created by pery on 05/02/2016.
 */
require('./timer.drv.scss');

module.exports = angular.module(__filename,[])
    .run(function () {
        console.log('timer run');
    })
    .directive('timer',[
        function () {
            return {
                template:'10.10.10'
                //,template:require('./timer.drv.html')
                ,scope:{
                    
                }
                ,controller: function ($scope) {
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
                }
                ,link: function (scope, element, attr, ctrls ) {

                }
            }
            
    }]);




