/**
 * Created by Pery on 23/02/2016.
 */

var assert = require('assert');
//chai.should();

//var assert = chai.assert;
describe('timer factory', function () {

    var timer ;

    var durationOption = {
        trim: false,
        template: 'hh:mm:ss'
    };

    before(inject(function (Timer) {
        timer = new Timer()
    }));

    beforeEach(angular.mock.module('app'));





    it('should have default duration', inject(function () {
        assert.equal( timer.getDuration().format(durationOption) , '00:00:00');
    }));

    it('set to 00:05:00', inject(function () {
        timer.setDuration('00:05:00');
        assert.equal( timer.getDuration().format(durationOption) , '00:05:00');
    }));

});