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

angular.element(document).ready(function () {
    angular.bootstrap(document, [module.exports.name], {
        //strictDi: true
    });
});