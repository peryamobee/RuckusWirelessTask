/**
 * Created by pery on 07/02/2016.
 */
module.exports = angular.module(__filename,[])
    .factory('Timer', function () {
        var _duration = Symbol('_duration');
        var _on = Symbol('_on');
        var _emit = Symbol('_emit');

        function Timer(){
            var me = this;
            this[_on]= {};
            this[_emit]= {};
            this.status = {
                 paused : true
            };
            var previousCycle = new Date();

            /*create events code*/
            var events = 'start,pause,reset,setduration,update'.split(',');
            events.forEach(function (eventName) {
                var queue = me[_on][eventName] = [];
                /*listeners*/
                me['on'+_.capitalize(eventName)] =  queue.push.bind(queue);
                /*emits*/
                me[_emit][eventName] = function () {
                    _.over(queue).apply(me,arguments);
                };
            });
            this.setDuration();
            cycle(updateTimer);
            /*cycle*/
            function cycle(callback){
                var time = Date.now();
                callback(time, previousCycle);
                previousCycle = time;
                requestAnimationFrame(cycle.bind(this,callback));
            }

            function updateTimer(time,prevTime){
                if(me.status.paused) return ;

                var timePass = time - prevTime;
                var duration = me[_duration];
                duration.subtract(timePass,'milliseconds');
                if( duration.asMilliseconds() <= 0 ){
                    duration.add(- duration.asMilliseconds() );
                    me.status.paused = true;
                    me[_emit].pause(duration)

                }
                me[_emit].update(duration)


            }
        }
        var events = 'reset'.split(',');
        _.extend(Timer.prototype,{
            setDuration: function setDuration( durationText ) {
                this.durationText = durationText ||  this.durationText;
                this[_duration] =  moment.duration( this.durationText );
                this[_emit].setduration( this[_duration] );
                this[_emit].update( this[_duration] )
            },
            start: function start(){
                this.status.paused = false;
                this[_emit].start( this[_duration] );
            },
            pause: function pause () {
                //ga('create', 'UA-XXXXX-Y', 'auto', 'stop timter');
                //_trackEvent('timer', 'start', time)
                this.status.paused = true;
                this[_emit].pause( this[_duration] );
            },
            reset: function reset(){
                this.setDuration()
                this.status.paused = true;
                this[_emit].reset( this[_duration] );
            },
            restart: function restart () {
                //ga('create', 'UA-XXXXX-Y', 'auto', 'start timer');
                this.reset();
                this.start();
            }
        });


        return Timer;
    });


/*****************
 ** WEBPACK FOOTER
 ** ./src/common/timer.drv/timer.fct.js
 ** module id = 133
 ** module chunks = 0
 **/