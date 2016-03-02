/**
 * Created by Pery on 23/02/2016.
 */

//var assert = require('assert');
var should = chai.should();
//chai.should();

//var assert = chai.assert;
describe('timer factory', function () {

    var timer ;

    var durationOption = {
        trim: false,
        template: 'hh:mm:ss'
    };

    beforeEach(angular.mock.module('app'));

    it('should exist',inject(function (Timer) {
        timer = new Timer();
        should.exist(timer);
    }));

    it('should have default duration', inject(function () {
        should.equal( timer.getDuration().format(durationOption) , '00:00:00');
    }));

    it('set to 00:05:00', inject(function () {
        timer.setDuration('00:05:00');
        should.equal( timer.getDuration().format(durationOption) , '00:05:00');
    }));
    
    it.skip('set to 1\' 5"', function () {
        timer.setDuration('1\' 4"');
        should.equal( timer.getDuration().format(durationOption) , '00:04:00');
    });

    describe('timer start', function () {
        it('should change state.start to true', function () {
            timer.start();
            should.equal(timer.state.start, true);
        })
    })
});

