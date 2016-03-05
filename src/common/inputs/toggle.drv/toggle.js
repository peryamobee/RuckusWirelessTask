/**
 * Created by Pery on 17/02/2016.
 */
require('./toggle.scss');

module.exports = angular.module(__filename, [])
    .directive('toggle', function () {
        return {
            restrict: "E",
            require: 'ngModel',
            template: require('./toggle.html'),
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
