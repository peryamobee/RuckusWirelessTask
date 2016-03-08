/**
 * Created by Pery on 17/02/2016.
 */
module.exports = angular.module(__filename,[])
.directive('classToggle',function (Timer) {
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
});
