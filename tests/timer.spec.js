/**
 * Created by Pery on 23/02/2016.
 */
//var assert = require('assert');
//chai.should();
var assert = chai.assert;
describe('timer factory', function () {

    beforeEach(angular.mock.module('app'));
    var durationOption = {
        trim: false,
        template: 'hh:mm:ss'
    };


    it('should setted', inject(function (Timer) {
        var timer = new Timer();
        assert.equal( timer.getDuration().format(durationOption) , '00:00:00');
    }));
});