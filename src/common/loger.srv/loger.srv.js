/**
 * Created by pery on 08/02/2016.
 */
module.exports = angular.module(__filename,[])
    .service('Loger', function () {
        var logs = new Set();
        logs.list = function(){
            return Array.from( logs );
        }


        return logs;
    });