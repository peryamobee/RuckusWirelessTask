require('./index.scss');



module.exports = angular.module('app', [
 'ui.router'
 ,'ui.router.stateHelper'
  ,require('common/common.js').name
])
.config(function (stateHelperProvider, $urlRouterProvider) {
   /* var Timer = require('./pages/timerPage/timerPage.js').stateConfig;
    stateHelperProvider.state({
        name: "root",
        url: "^",
        abstract: true,
        template: '<ui-view></ui-view>',
        children: [
            Timer
        ]
    }, "IgnoreRoot");
    $urlRouterProvider.otherwise(Timer.url);*/
})
//.directive('timer',[
//        function () {
//            return {
//                template:'10.10.10'
//                //,template:require('./timer.drv.html')
//                ,scope:{
//
//                }
//                ,controller: function ($scope) {
//                    function Timer(){
//                        ga('create', 'UA-XXXXX-Y', 'auto', 'myTracker');
//                    }
//
//                    Timer.prototype.start = function () {
//                        ga('create', 'UA-XXXXX-Y', 'auto', 'start timer');
//                    };
//
//                    Timer.prototype.stope = function () {
//                        ga('create', 'UA-XXXXX-Y', 'auto', 'stop timter');
//                        //_trackEvent('timer', 'start', time)
//                    };
//                }
//                ,link: function (scope, element, attr, ctrls ) {
//
//                }
//            }
//
//}])
.run(function () {

});


angular.element(document).ready(function () {
    angular.bootstrap(document, [module.exports.name], {
        //strictDi: true
    });
});