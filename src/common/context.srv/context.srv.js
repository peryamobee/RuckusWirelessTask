/**
 * Created by pery on 08/02/2016.
 */
module.exports = angular.module(__filename,[])
    .service('context', function () {
        var context = {};

        Object.defineProperty(context,'extend',{
            value: function( newValues ){
                _.extend( context, newValues );
                return context;
            }
        });

        return context;
    });

