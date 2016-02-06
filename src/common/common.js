/**
 * Created by pery on 06/02/2016.
 */
module.exports = angular.module(module.id + '', [
    require('./timer.drv/timer.drv.js').name
]).run(function () {
    console.log('common run');
});