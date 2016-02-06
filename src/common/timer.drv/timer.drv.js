/**
 * Created by pery on 05/02/2016.
 */
require('./timer.drv.scss');

module.exports = angular.module(__filename,[])
    .directive('timer',[function () {

        var _duration = Symbol("duration");

        return {
            require:'timer'
            ,template:require('./timer.drv.html')
            ,controller: function ($scope) {
                //ga('create', 'UA-XXXXX-Y', 'auto', 'myTracker');
                var me = this;

                me.states = {
                    paused:true
                }
                reset();


                /*API*/
                return _.extend(me,{
                    start: restart
                    ,pause: pause
                    ,reset: reset
                 });

                function reset(){
                    me[_duration] =  moment.duration($scope.duration);
                    me.states.paused = true;
                }

                function restart () {
                    //ga('create', 'UA-XXXXX-Y', 'auto', 'start timer');
                    reset();
                    me.states.paused = false;
                }

                function pause () {
                    //ga('create', 'UA-XXXXX-Y', 'auto', 'stop timter');
                    //_trackEvent('timer', 'start', time)
                    me.states.paused = true;
                }
            }
            ,controllerAs:'TimerCtrl'
            ,scope:{
                duration:'='
                ,editor:'=?'

            }
            ,link: function (scope, element, attr, ctrl ) {
                scope.editor = ctrl;
                var $hours = element.find('.hours')
                    ,$minutes = element.find('.minutes')
                    ,$seconds = element.find('.seconds')
                    ,miliSeconds = element.find('.mili-seconds')
                ;
                var previousCycle = Date.now()

                ;
                scope.$watch('duration',function(){
                    ctrl.reset();
                });

                cycle();

                function cycle(){
                    var time = Date.now();
                    if( !ctrl.states.paused ){
                        updateTimer(time, previousCycle)
                    }
                    renderTimer(time, previousCycle);
                    previousCycle = time;
                    requestAnimationFrame(cycle);
                }

                function updateTimer(time,prevTime){
                    var timePass = time - prevTime;
                    var duration = ctrl[_duration];
                    duration.subtract(timePass,'milliseconds');
                }

                function renderTimer(time,prevTime){
                    var duration = ctrl[_duration];
                    $hours.html( pad(duration.hours(),2) );
                    $minutes.html( pad(duration.minutes(),2) );
                    $seconds.html( pad(duration.seconds(),2) );
                    miliSeconds.html( pad(duration.milliseconds(),3) );

                }

                function pad(num,padding){
                   padding = '0'.repeat(padding);
                   return (padding + num).slice(-padding.length);
                }

            }
        }
            
    }]);




