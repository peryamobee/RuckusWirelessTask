require("qtip2");

angular.extend(module.exports,angular.module(__filename,[]))

    .directive('amTooltip', ['$parse',function ($parse) {
        var setMy = $parse('position.my').assign;
        var setAt = $parse('position.at').assign;
        var setContent = $parse('content').assign;

        const SOLO = {
            show: {solo: true},
            hide: {delay: 200},
            position: {my: 'bottom center', at: 'top center'},
            style: {classes: 'common-tooltip-info', tip: {width: 10, height: 5}}
        };

        const NO_SOLO = {
            hide: {delay: 100, event: 'mouseleave click'},
            position: {my: 'bottom center', at: 'top center'},
            style: {classes: 'common-tooltip-info', tip: {width: 10, height: 5}}
        };

        return {
            restrict:'A',
            priority:0,
            link: function ($scope, element, attr, ctrl) {
                var toolTipPos = attr.amTooltip || 'bottom center to top center';
                toolTipPos = toolTipPos.split(' to ');
                var my = toolTipPos[1];
                var at = toolTipPos[0];
                //var content = $scope.$eval(attr.title);
                var options = {};
                setMy(options, my);
                setAt(options, at);
                //setContent(options, content );
                setTimeout(function () {
                    var settings = $.extend(true, {}, NO_SOLO, options);
                    $(element).qtip(settings).removeData("qtip");
                },1000);


                //= element.qtip('api');
                $scope.$watch(attr.amTooltipDisabled, function (nv, ov) {
                    if( nv == void 0) return ;
                    //qtipApi.disable(!!nv);
                    element.qtip('disable',!!nv);
                })

            }
        }
    }])

;