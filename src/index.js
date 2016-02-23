require('./index.scss');


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
        strictDi: true
    });
});