/**
 * Created by pery on 05/02/2016.
 */
require('./timer.drv.scss');

module.exports = angular.module(__filename,[
    require('./timer.fct').name
])
.directive('timer',function (Timer) {
    return {
        template:function(){
            return require('./timer.drv.html');
        }
        ,controllerAs:'TimerCtrl'
        ,scope:{
            duration:'='
            ,editor:'=?'
        }
        ,link: function postLink(scope, element, attr) {
            var timer = new Timer(attr.duration);
            scope.editor = timer;
            var $hours = element.find('.hours')
                ,$minutes = element.find('.minutes')
                ,$seconds = element.find('.seconds')
                ,miliSeconds = element.find('.mili-seconds')
                ;
            scope.$watch('durationText',function(){
                timer.setDuration(scope.duration)
            });

            timer.onUpdate(renderTimer);

            function renderTimer(duration){
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

});




