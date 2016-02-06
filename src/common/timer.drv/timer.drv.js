/**
 * Created by pery on 05/02/2016.
 */
require('./timer.drv.scss');

module.exports = require("angular").module(__filename,[])
    .directive('timer',[
        function () {
            return {
                restrict: "E"
                ,template:require('./timer.drv.html')
                ,scope:{
                    
                }
                ,link: function (scope, element, attr, ctrls ) {

                }
            }
            
    }]);


