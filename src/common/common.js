/**
 * Created by pery on 06/02/2016.
 */
var drv = require('./timer.drv/timer.drv.js');
module.exports = angular.module(__filename, [
    drv.name
]).run(function () {
    console.log('common run');
});