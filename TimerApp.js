/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	baseController.$inject = ["$scope", "$location", "Timer", "context"];__webpack_require__(1);

	/*@ngInject*/
	function baseController($scope, $location, Timer, context){
	    var duration = $location.search().t;
	    $scope.context = context;

	    context.extend ({
	        duration : duration,
	        timer:  new Timer(duration),
	        autoStart: ('autostart' in $location.search()),
	        players1Name:'player1',
	        players2Name:'player2',
	        timerFormat:{
	            template:'hh:mm:ss',
	            trim:false
	        }
	    });

	    $scope.$watch('context.duration', function (nv) {
	        context.timer.setDuration(nv);
	        $location.search('t',nv)
	    });
	}
	baseController.$inject = ["$scope", "$location", "Timer", "context"];

	module.exports = angular.module('app', [
	 'ui.router'
	 ,'ui.router.stateHelper'
	  ,__webpack_require__(5).name
	])
	.config(["stateHelperProvider", "$urlRouterProvider", function (stateHelperProvider, $urlRouterProvider) {
	    var timerPage = __webpack_require__(40).stateConfig;
	    var dualPage = __webpack_require__(44).stateConfig;
	    var chessPage = __webpack_require__(48).stateConfig;
	    stateHelperProvider.state({
	        name: "root",
	        url: "^",
	        abstract: true,
	        //template: '<ui-view> loading ..</ui-view>',
	        controller: baseController,
	        children: [
	            timerPage,
	            dualPage,
	            chessPage
	        ]
	    }, "IgnoreRoot");
	    $urlRouterProvider.otherwise(timerPage.url);
	}]);

	angular.element(document).ready(function () {
	    angular.bootstrap(document, [module.exports.name], {
	        strictDi: true
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {/**
	 * Created by pery on 06/02/2016.
	 */

	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(16);
	__webpack_require__(18);
	__webpack_require__(22);

	module.exports = angular.module(__filename, [
	    __webpack_require__(24).name
	    ,__webpack_require__(29).name
	    ,__webpack_require__(27).name
	    ,__webpack_require__(33).name
	    ,__webpack_require__(34).name
	    ,__webpack_require__(35).name
	    ,__webpack_require__(39).name
	]);

	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\common.js"))

/***/ },
/* 6 */
1,
/* 7 */,
/* 8 */
1,
/* 9 */,
/* 10 */
1,
/* 11 */,
/* 12 */
1,
/* 13 */,
/* 14 */
1,
/* 15 */,
/* 16 */
1,
/* 17 */,
/* 18 */
1,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
1,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {/**
	 * Created by pery on 05/02/2016.
	 */
	__webpack_require__(25);

	module.exports = angular.module(__filename,[
	    __webpack_require__(27).name
	])
	.directive('timer',function () {
	    return {
	        template:function(){
	            return __webpack_require__(28);
	        }
	        //,controllerAs:'TimerCtrl'
	        ,scope:{
	            timer:'=timerModel',
	            withMiliSeconds:'=?'
	        }
	        ,link: function postLink(scope, element, attr) {

	            var $hours = element.find('.hours')
	                ,$minutes = element.find('.minutes')
	                ,$seconds = element.find('.seconds')
	                ,miliSeconds = element.find('.mili-seconds')
	                ;
	            scope.$watch('durationText',function(){
	                scope.timer.setDuration(scope.duration)
	            });

	            scope.toggleMiliSeconds = toggleMiliSeconds;

	            scope.timer.onUpdate(renderTimer);
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

	            function toggleMiliSeconds(){
	                scope.withMiliSeconds != scope.withMiliSeconds;
	            }

	        }
	    }

	});





	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\visual\\timer.drv\\timer.drv.js"))

/***/ },
/* 25 */
1,
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__filename) {var ga = window.ga;
	module.exports = angular.module(__filename,[])
	    .factory('Timer', ["$rootScope", "$timeout", function ($rootScope,$timeout) {
	        var _duration = Symbol('_duration');
	        var _on = Symbol('_on');
	        var _emit = Symbol('_emit');
	        var durationOption = {
	            trim: false,
	            template: 'hh:mm:ss'
	        };
	        /** [10h] [10m] [10s] [10ms] */
	        /** [10hour] [10min] [10sec] [10milisec] */
	        /** [10hour[s]] [10minute[s]] [10second[s]] [10[milisec[s]] */
	        var hours = "(?:(\\d{1,2})\\s*(?:h|hour|hours)\\b)?"  //\b is word boundary
	            ,minutes = "(?:(\\d{1,2})\\s*(?:m|min|minute|minutes)\\b)?"
	            ,seconds = "(?:(\\d{1,2})\\s*(?:s|sec|second|seconds)\\b)?"
	            ,miliseconds = "(?:(\\d{1,2})\\s*(?:ms|milisec|milisecs)\\b)?"
	            ;
	        var format = [hours,minutes,seconds,miliseconds].join('\\s*')
	            ,timeExtractor = new RegExp(format);
	        function parseDuration(text){
	            var breakdown = (text || '').match( timeExtractor );
	            var describTime = null;
	            if(breakdown[0]){ //if !=''
	                describTime = {
	                    h: breakdown[1]*1 || 0,
	                    m: breakdown[2]*1 || 0,
	                    s: breakdown[3]*1 || 0,
	                    ms: breakdown[4]*1 || 0
	                };

	            }

	            return breakdown[0]?describTime:text;
	        }


	        function Timer(durationText){
	            var me = this;
	            this[_on]= {};
	            this[_emit]= {};
	            this.state = {
	                 pause : true,
	                 setted : false,
	                 timeEnd : false, /*mean time reached the end*/
	                 start  : false,
	                 stop: true
	            };
	            var previousCycle = new Date();

	            /** generate events code **/
	            var events = 'start,pause,reset,setduration,update,timeEnd'.split(',');
	            events.forEach(function (eventName) {
	                var queue = me[_on][eventName] = [];
	                /*listeners*/
	                me['on'+_.capitalize(eventName)] =  queue.push.bind(queue);
	                /*emits*/
	                me[_emit][eventName] = function () {
	                    _.over(queue).apply(me,arguments);
	                };
	            });

	            this.setDuration( durationText );
	            cycle(updateTimer);
	            /*cycle*/
	            function cycle(callback){
	                var time = Date.now();
	                callback(time, previousCycle);
	                previousCycle = time;
	                requestAnimationFrame(cycle.bind(this,callback));
	            }

	            function updateTimer(time,prevTime){
	                if(me.state.pause) return ;
	                if(me.state.stop) return ;

	                var timePass = time - prevTime;
	                var duration = me[_duration];
	                duration.subtract(timePass,'milliseconds');
	                //console.log(timePass, duration.asMilliseconds());


	                if( duration.asMilliseconds() <= 0 ){
	                    duration.add( -duration.asMilliseconds() );
	                    me.pause();
	                    me.state.timeEnd = true;
	                    me.state.stop = true;
	                    me[_emit].timeEnd(duration);
	                    /* google analytic */
	                    ga && ga( 'Timer.send', 'event', 'Timer', 'time end', 'duration', this.durationText );
	                }
	                me[_emit].update(duration);

	                //!$rootScope.$$phase && $rootScope.$digest(); //bad way
	                $timeout();//good way
	            }
	        }
	        var events = 'reset'.split(',');
	        _.extend(Timer.prototype,{
	            setDuration: function setDuration( durationText ) {
	                var durationDescription = parseDuration(durationText);
	                durationDescription = durationDescription || this.durationDescription;
	                this[_duration] =  moment.duration( durationDescription );
	                this.durationDescription = durationDescription;
	                /*state*/
	                this.state.timeEnd = false;
	                this.state.setted = (this[_duration].asMilliseconds() > 0);
	                /*event*/
	                this[_emit].setduration( this[_duration] );
	                this[_emit].update( this[_duration] )
	            },
	            getDuration:function getDuration(){
	                return this[_duration];
	            },
	            start: function start(){
	                if(!this.state.timeEnd){
	                    /*state*/
	                    this.state.start = true;
	                    this.state.pause = false;
	                    this.state.stop = false;
	                    this.state.timeEnd = false;
	                    /*event*/
	                    this[_emit].start( this[_duration] );
	                    /* google analytic */
	                    ga && ga('Timer.send', 'event', 'Timer', 'start', 'time', this[_duration].format(durationOption) );
	                }
	            },
	            pause: function pause () {
	                //ga('create', 'UA-XXXXX-Y', 'auto', 'stop timter');
	                //_trackEvent('timer', 'start', time)
	                /*state*/
	                this.state.start = false;
	                this.state.pause = true;
	                this.state.stop = false;
	                this.state.timeEnd = false;
	                /*event*/
	                this[_emit].pause( this[_duration] );

	                /* google analytic */
	                ga && ga('Timer.send', 'event', 'Timer', 'pause', 'time', this[_duration].format(durationOption) );

	            },
	            reset: function reset(){
	                this.setDuration();
	                /*state*/
	                this.state.start = false;
	                this.state.pause = false;
	                this.state.stop = true;
	                this.state.timeEnd = false;

	                this[_emit].reset( this[_duration] );
	                /* google analytic */
	                ga && ga('Timer.send', 'event', 'Timer', 'reset', 'time', this[_duration].format(durationOption) );
	            },
	            restart: function restart () {
	                //ga('create', 'UA-XXXXX-Y', 'auto', 'start timer');
	                this.reset();
	                this.start();
	            },
	            stop: function(){
	                this.reset();
	            }
	        });


	        return Timer;
	    }]);


	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\factories\\timer.fct.js"))

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\r\n<span class=\"hours\">10</span>:<span class=\"minutes\">10</span>:<span class=\"seconds\">10</span>\r\n<span ng-show=\"withMiliSeconds\"\r\n      ng-click=\"toggleMiliSeconds()\"\r\n    >.<span class=\"mili-seconds\">10</span>\r\n</span>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {/**
	 * Created by pery on 05/02/2016.
	 */
	__webpack_require__(30);

	module.exports = angular.module(__filename,[])
	    .directive('tickTock',[function () {
	        return {
	            template: __webpack_require__(32)
	        }

	    }]);





	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\visual\\tickTock.drv\\tickTock.drv.js"))

/***/ },
/* 30 */
1,
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div class=\"actual\">\r\n        <div class=\"\" id=\"blurred\">\r\n            <div class=\"gear1\"></div>\r\n            <div class=\"gear2\"></div>\r\n            <div class=\"circle\"></div>\r\n            <div class=\"wheel\">\r\n                <div class=\"slot\">\r\n                    <p>i</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <span></span>\r\n                    <p>o</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <p>i</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <span></span>\r\n                    <p>o</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <p>i</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <span></span>\r\n                    <p>o</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"\" id=\"original\">\r\n            <div class=\"gear1\"></div>\r\n            <div class=\"gear2\"></div>\r\n            <div class=\"circle\"></div>\r\n            <div class=\"wheel\">\r\n                <div class=\"slot\">\r\n                    <p>i</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <span></span>\r\n                    <p>o</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <p>i</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <span></span>\r\n                    <p>o</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <p>i</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"slot\">\r\n                    <span></span>\r\n                    <p>o</p>\r\n                </div>\r\n                <div class=\"slit\">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"reflection\">\r\n        <div class=\"gear1\"></div>\r\n        <div class=\"gear2\"></div>\r\n        <div class=\"circle\"></div>\r\n        <div class=\"wheel reflect\">\r\n            <div class=\"slot\">\r\n                <p>i</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <span></span>\r\n                <p>o</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <p>i</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <span></span>\r\n                <p>o</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <p>i</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <span></span>\r\n                <p>o</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"fade\"></div>-->\r\n    </div>\r\n\r\n    <div class=\"lighting\">\r\n        <div class=\"wheel reflect\">\r\n            <div class=\"slot\">\r\n                <p>i</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <p>o</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <p>i</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <p>o</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <p>i</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n            <div class=\"slot\">\r\n                <p>o</p>\r\n            </div>\r\n            <div class=\"slit\">\r\n                <div></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"box\">\r\n        <div>\r\n            <p>t</p>\r\n        </div>\r\n        <div>\r\n        </div>\r\n        <div>\r\n            <p>c</p>\r\n        </div>\r\n        <div>\r\n            <p>k</p>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 33 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__filename) {/**
	 * Created by pery on 08/02/2016.
	 */
	module.exports = angular.module(__filename,[])
	    .factory('TimeLogger', function () { //todo:change it to loggerTime
	        return function ( timer ) {
	            /*collection*/
	            var logs = new Set();
	            var Duration = moment.duration.bind(moment);
	            var summary =  moment.duration();
	            var summaryText = '';

	            var durationOption = {
	                trim: false,
	                template: 'hh:mm:ss'
	            };

	            /** API **/
	            _.extend(logs, {
	                list: list,
	                createLog: createLog
	            });
	            Object.defineProperty(logs, 'summary', {
	                get: function () {
	                    return  summaryText;
	                }
	            });

	            /** end API **/
	            function list() {
	                return Array.from(logs);
	            }

	            function createLog(player) {
	                var startTime = Duration(timer.getDuration());

	                var log = {
	                    name: player,
	                    startTime: startTime.format(durationOption),
	                    endTime: '',
	                    duration: ''
	                };
	                logs.add(log);
	                return function closeLog( final ) {
	                    var endTime = timer.getDuration();
	                    var duration = Duration(startTime).subtract(endTime);
	                    log.endTime = endTime.format(durationOption);
	                    var template =  (duration.asSeconds() > 0)?
	                        'h[hrs] mm[min] ss[s]':
	                        'h[hrs] mm[min] ss[s] SSS[ms]';
	                    log.duration = duration.format( template ) ;


	                    summaryText = Duration(summary).add( duration ).format(durationOption);
	                    final && summary.add( duration );

	                    return log;
	                }
	            }

	            return logs;
	        }
	    });
	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\factories\\timeLogger.fct.js"))

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__filename) {/**
	 * Created by pery on 08/02/2016.
	 */
	module.exports = angular.module(__filename,[])
	    .service('context', function () {
	        var context = {};

	        Object.defineProperty(context,'extend',{
	            value: function( newValues ){
	                _.extend( context, newValues );
	                return context;
	            },
	            addTimer: function (timer) {

	            } 
	        });

	        return context;
	    });


	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\services\\context.srv\\context.srv.js"))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {/**
	 * Created by Pery on 17/02/2016.
	 */
	__webpack_require__(36);

	module.exports = angular.module(__filename, [])
	    .directive('toggleButton', function () {
	        return {
	            restrict: "E",
	            require: 'ngModel',
	            template: __webpack_require__(38),
	            link: function ( scope, element, attr, ctrl ) {
	                var PARTIAL = 2;
	                var trueValue = attr.ngTrueValue || 'true';
	                var falseValue = attr.ngFalseValue || 'false';
	                var partialValue = attr.partialValue || '"partial"';

	                element.click(function (event) {
	                    if(attr.disabled) return ;
	                    toggleChecked();
	                });

	                function render(value){
	                    element.removeAttr('checked');
	                    element.removeAttr('indeterminate');
	                    if ( value ) {
	                        element.attr('checked', 'checked');
	                        (value == PARTIAL)
	                            && element.attr('indeterminate', 'indeterminate');
	                    }
	                }

	                ctrl.render = function() {
	                    render( ctrl.$viewValue );
	                };

	                var initViewValue = attr.checked ? attr.indeterminate? PARTIAL : true : false;
	                //todo: something not work here when modelValue init before directive build
	                //ctrl.$setViewValue( ctrl.$viewValue || initViewValue );
	                ctrl.render( ctrl.$viewValue );

	                function toggleChecked() {
	                    ctrl.$setViewValue(!ctrl.$modelValue);
	                    ctrl.render();
	                }

	                ctrl.$formatters.push(function (value) {
	                    switch (value){
	                        case scope.$parent.$eval(trueValue):
	                            value = true;
	                            break;
	                        case scope.$parent.$eval(falseValue):
	                            value = false;
	                            break;
	                        case scope.$parent.$eval(partialValue):
	                            value = PARTIAL;
	                            break;
	                    }
	                    render( value );
	                    return value
	                });
	                ctrl.$parsers.unshift(function (value) {
	                    value = value ? (value == PARTIAL) ? partialValue : trueValue : falseValue;
	                    value = scope.$parent.$eval(value);
	                    ctrl.render(value);
	                    return value;

	                });

	            }
	        }
	    });

	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\inputs\\toggle-button.drv\\toggle-button.js"))

/***/ },
/* 36 */
1,
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\"></div>\r\n<span class=\"on\">On</span>\r\n<span class=\"off\">Off</span>"

/***/ },
/* 39 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__filename) {/**
	 * Created by Pery on 17/02/2016.
	 */
	module.exports = angular.module(__filename,[])
	.directive('classToggle',["Timer", function (Timer) {
	    var separator = /(.+)?\.([^.]+)$/; // (selector).(toggledClass)
	    return {
	        restrict:'A',
	        link: function postLink(scope, element, attr) {
	            var res = attr.classToggle.match(separator);
	            var className = res? res[2] : classToggle;
	            var targetElement = res? angular.element(res[1]) : element;

	            element.on('click', function () {
	                targetElement[0].classList.toggle(className)
	            })
	        }
	    };
	}]);

	/* WEBPACK VAR INJECTION */}.call(exports, "src\\common\\helpers\\classToggle.drv.js"))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by pery on 31/01/2016.
	 */
	timerController.$inject = ["$scope", "$location", "$timeout", "Timer", "context"];
	__webpack_require__(41);
	/*@ngInject*/
	function timerController($scope, $location, $timeout, Timer, context){
	   var timer = $scope.timer = new Timer(context.duration);
	    context.autoStart && timer.start();
	   $scope.$watch('context.duration', timer.setDuration.bind(timer));

	    /* google analytic */
	    ga('Timer.send', 'pageview', 'simple Page');
	}
	timerController.$inject = ["$scope", "$location", "$timeout", "Timer", "context"];

	module.exports.stateConfig = {
	    name:"timer",
	    url:"/timer",
	    abstract:false,
	    template: __webpack_require__(43),
	    controller: timerController
	};

/***/ },
/* 41 */
1,
/* 42 */,
/* 43 */
/***/ function(module, exports) {

	module.exports = "<side-menu>\r\n    <h3>customize</h3>\r\n    <br>\r\n    <span>milli sec :</span><toggle-button ng-model=\"context.milisec\"></toggle-button>\r\n    <br>\r\n    <span>auto start:</span><toggle-button ng-model=\"context.autoStart\"></toggle-button>\r\n</side-menu>\r\n\r\n\r\n<div class=\"simple-timer\">\r\n    <tick-tock ng-class=\"{\r\n    start:timer.state.start,\r\n    pause:timer.state.pause,\r\n}\"></tick-tock>\r\n    <timer timer-model=\"timer\"\r\n           with-mili-seconds=\"context.milisec\"\r\n    >timer inside</timer>\r\n\r\n    <br>\r\n    <control-pannel >\r\n        <button class=\"start-button\"\r\n                ng-click=\"timer.start()\">\r\n            <i class=\"fa fa-play fa-fw\"></i>\r\n            Start\r\n        </button>\r\n\r\n        <button class=\"reset-button\"\r\n                ng-click=\"timer.pause()\">\r\n            <i class=\"fa fa-pause fa-fw\"></i>\r\n            Pause\r\n        </button>\r\n\r\n        <button class=\"pause-button\"\r\n                ng-click=\"timer.reset()\">\r\n            <i class=\"fa fa-stop fa-fw\"></i>\r\n\r\n            Reset\r\n        </button>\r\n    </control-pannel>\r\n</div>\r\n"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by pery on 31/01/2016.
	 */
	timerController.$inject = ["$scope", "TimeLogger", "Timer", "context"];
	__webpack_require__(45);
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
	timerController.$inject = ["$scope", "TimeLogger", "Timer", "context"];

	module.exports.stateConfig = {
	    name:"dual",
	    url:"/dual",
	    abstract:false,
	    template: __webpack_require__(47),
	    controller: timerController
	};

/***/ },
/* 45 */
1,
/* 46 */,
/* 47 */
/***/ function(module, exports) {

	module.exports = "<side-menu>\r\n    <h3>customize</h3>\r\n    <br>\r\n    <span>milli sec :</span><toggle-button ng-model=\"context.milisec\"></toggle-button>\r\n    <br>\r\n    <span>burn fx :</span><toggle-button ng-model=\"context.burnFx\"></toggle-button>\r\n    <br>\r\n    <span>auto start :</span><toggle-button ng-model=\"context.autoStart\"></toggle-button>\r\n    <br>\r\n    <button class=\"pause-button\"\r\n            ng-click=\"timer.pause()\">\r\n        <i class=\"fa fa-pause fa-fw\"></i>\r\n        Pause\r\n    </button>\r\n\r\n    <button class=\"reset-button\"\r\n            ng-click=\"timer.reset();timeLogger.clear();\">\r\n        <i class=\"fa fa-stop fa-fw\"></i>\r\n        Reset\r\n    </button>\r\n\r\n</side-menu>\r\n\r\n\r\n<div class=\"dual-timer\">\r\n\r\n    <control-pannel >\r\n        <button class=\"reset-button\"\r\n                ng-click=\"timer.pause()\">\r\n            <i class=\"fa fa-pause fa-fw\"></i>\r\n            Pause\r\n        </button>\r\n\r\n        <button class=\"big-main-button\"\r\n                ng-class=\"{'burn-fx':context.burnFx && timer.state.start}\"\r\n                ng-click=\"switchPlayer()\">\r\n\r\n            <timer timer-model=\"timer\"\r\n                   with-mili-seconds=\"context.milisec\"\r\n                   ng-class=\"{finish:timer.state.timeEnd}\">timer inside</timer>\r\n            <span ng-show=\"timer.state.start\">switch</span>\r\n            <span ng-hide=\"timer.state.start\">start</span>\r\n        </button>\r\n\r\n        <button class=\"pause-button\"\r\n                ng-click=\"timer.reset()\">\r\n            <i class=\"fa fa-stop fa-fw\"></i>\r\n            Reset\r\n        </button>\r\n    </control-pannel>\r\n\r\n    <tick-tock ng-class=\"{\r\n        start:timer.state.start,\r\n        pause:timer.state.pause,\r\n    }\"></tick-tock>\r\n\r\n    <div class=\"log-table\">\r\n        <h3 class=\"header\">\r\n           <div class=\"player-name\">name</div>\r\n           <div class=\"start-time\">start</div> -\r\n           <div class=\"end-time\">end</div> =\r\n           <div class=\"duration-time\">duration</div>\r\n        </h3>\r\n        <div class=\"log\" ng-repeat=\"log in  timeLogger.list().reverse()\">\r\n            <div class=\"player-name\"\r\n                 ng-bind=\"log.name\">player start time</div>\r\n\r\n            <div class=\"start-time\"\r\n                 ng-bind=\"log.startTime\">player start time</div> -\r\n\r\n            <div class=\"end-time\"\r\n                 ng-bind=\"log.endTime\">player end time</div> =\r\n\r\n            <div class=\"duration-time\"\r\n                 ng-bind=\"log.duration\">player duration</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	
	timerController.$inject = ["$scope", "TimeLogger", "Timer", "context"];__webpack_require__(49);
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
	timerController.$inject = ["$scope", "TimeLogger", "Timer", "context"];

	module.exports.stateConfig = {
	    name:"chess",
	    url:"/chess",
	    abstract:false,
	    template: __webpack_require__(51),
	    controller: timerController
	};

/***/ },
/* 49 */
1,
/* 50 */,
/* 51 */
/***/ function(module, exports) {

	module.exports = "<side-menu>\r\n    <h3>customize</h3>\r\n    <br>\r\n    <span>milli sec :</span><toggle-button ng-model=\"context.milisec\"></toggle-button>\r\n    <br>\r\n    <span>auto start:</span><toggle-button ng-model=\"context.autoStart\"></toggle-button>\r\n\r\n    <br>\r\n    <button class=\"pause-button\"\r\n            ng-click=\"pauseTimers()\">\r\n        <i class=\"fa fa-pause fa-fw\"></i>\r\n        Pause\r\n    </button>\r\n\r\n    <button class=\"reset-button\"\r\n            ng-click=\"resetTimers()\">\r\n        <i class=\"fa fa-stop fa-fw\"></i>\r\n        Reset\r\n    </button>\r\n\r\n</side-menu>\r\n\r\n\r\n\r\n<div class=\"chess-timer\">\r\n    <button class=\"swings-button\"\r\n            ng-class=\"{\r\n                'burn-fx':context.burnFx,\r\n                'toggle-left':players[0].timer.state.start,\r\n                'toggle-right':players[1].timer.state.start\r\n            }\"\r\n            ng-click=\"switchPlayer()\">\r\n\r\n        <span >switch</span>\r\n    </button>\r\n    <br>\r\n\r\n    <tick-tock class=\"player-1\"  ng-class=\"{\r\n        start: players[0].timer.state.start,\r\n        pause: players[0].timer.state.pause,\r\n    }\"></tick-tock>\r\n\r\n    <tick-tock class=\"player-2\" ng-class=\"{\r\n        start: players[1].timer.state.start,\r\n        pause: players[1].timer.state.pause,\r\n    }\"></tick-tock>\r\n\r\n    <div class=\"log-table side-by-side\"\r\n         ng-repeat=\"player in players\"\r\n         ng-class=\"{\r\n            active:player.active,\r\n            'not-active': !player.active && (players[0].active || players[1].active)\r\n        }\">\r\n\r\n        <div class=\"player-name\" ng-bind=\"player.name\">name</div>\r\n        <span>Time Left</span>\r\n        <timer timer-model=\"player.timer\"\r\n               with-mili-seconds=\"context.milisec\">timer inside</timer>\r\n\r\n        <h3 class=\"header\">\r\n            <div class=\"start-time\">start</div> -\r\n            <div class=\"end-time\">end</div> =\r\n            <div class=\"duration-time\">duration</div>\r\n        </h3>\r\n        <div class=\"log\" ng-repeat=\"log in  player.timeLogger.list().reverse()\">\r\n            <div class=\"start-time\"\r\n                 ng-bind=\"log.startTime\">player start time</div> -\r\n\r\n            <div class=\"end-time\"\r\n                 ng-bind=\"log.endTime\">player end time</div> =\r\n\r\n            <div class=\"duration-time\"\r\n                 ng-bind=\"log.duration\">player duration</div>\r\n        </div>\r\n        <div class=\"summary\">\r\n            <div class=\"duration-time\" ng-bind=\"player.timeLogger.summary\">10:20:20</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }
/******/ ])));
//# sourceMappingURL=TimerApp.js.map