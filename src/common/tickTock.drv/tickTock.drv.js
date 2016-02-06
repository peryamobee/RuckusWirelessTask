/**
 * Created by pery on 05/02/2016.
 */
require('./tickTock.drv.scss');

module.exports = angular.module(__filename,[])
    .directive('tickTock',[function () {
        return {
            template: require('./tickTock.drv.html')
        }

    }]);




