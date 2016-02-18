require('./index.scss');


function baseController($scope, $location, Timer, context){
    var duration = $location.search().t;
    $scope.context = context;

    context.extend ({
        duration : duration,
        timer : new Timer(duration)
    });

    if('autostart' in $location.search()){
        context.timer.start();
    }
    $scope.$watch('context.duration', function (nv) {
        context.timer.setDuration(nv);
    });

    context.timer.onSetduration(function () {
        $location.search('t',context.timer.getDuration().format('hh:mm:ss',{trim:false}))
    });
    
}

module.exports = angular.module('app', [
 'ui.router'
 ,'ui.router.stateHelper'
  ,require('common/common.js').name
])
.config(function (stateHelperProvider, $urlRouterProvider) {
    var timerPage = require('./pages/simpleTimer/simpleTimer.js').stateConfig;
    var dualPage = require('./pages/dualTimer/dualTimer.js').stateConfig;
    var chessPage = require('./pages/chessTimer/chessTimer.js').stateConfig;
    stateHelperProvider.state({
        name: "root",
        url: "^",
        abstract: true,
        //template: '<ui-view>234234</ui-view>',
        controller: baseController,
        children: [
            timerPage,
            dualPage,
            chessPage
        ]
    }, "IgnoreRoot");
    $urlRouterProvider.otherwise(timerPage.url);
});

angular.element(document).ready(function () {
    angular.bootstrap(document, [module.exports.name], {
        //strictDi: true
    });
});