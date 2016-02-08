/**
 * Created by Pery on 08/02/2016.
 */
module.exports = angular.module(__filename,[])
    .service('Loger', function () {
        var loger = new Set();
        return loger;
    });