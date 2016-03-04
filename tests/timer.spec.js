/**
 * Created by Pery on 23/02/2016.
 */

//var assert = require('assert');
var should = chai.should();
//chai.should();

//var assert = chai.assert;

describe('timer factory:', (function ($timeout) {

    var timer ;

    var durationOption = {
        trim: false,
        template: 'hh:mm:ss'
    };
    var _$timeout = null;

    beforeEach(angular.mock.module('app')); //why before not work here

    beforeEach(inject(function ($timeout) {
        _$timeout = $timeout;
    }));

    it('should exist',inject(function (Timer) {
        timer = new Timer();
        should.exist(timer);
    }));

    it('default duration', inject(function () {
        timer.getDuration().format(durationOption).should.equal('00:00:00');
    }));

    it('init state', function () {
        timer.state.should.be.deep.equals({
            pause: true, setted: false, timeEnd: false, start: false, stop: true
        })
    });

    it('set to 02:05:30', inject(function () {
        timer.setDuration('02:05:30');
        should.equal( timer.getDuration().format(durationOption) , '02:05:30');
        timer.state.should.be.deep.equals({
            pause: true, setted: true, timeEnd: false, start: false, stop: true
        })
    }));

    it('set to 00:05:00', inject(function () {
        timer.setDuration('00:05:00');
        should.equal( timer.getDuration().format(durationOption) , '00:05:00');
    }));

    it.skip('set to 1\' 5"', function () {
        timer.setDuration('1\' 4"');
        should.equal( timer.getDuration().format(durationOption) , '00:04:00');
    });

    describe('starting,', function () {
        this.timeout(93500);
        before(function () {
            timer.start();
        });
        it('should change state.start to true and other to false', function () {
            timer.state.should.be.deep.equals({
                pause: false, setted: true, timeEnd: false, start: true, stop: false
            })
        });

        it('should be under 5 min after 1.5 sec', function (done ) {
            //return _$timeout(function () {
            //    console.log(timer.getDuration().asMinutes());
            //    timer.getDuration().asMinutes().should.below(5) ;
            //},1500);
            setTimeout(function () {
                console.log(timer.getDuration().asSeconds());
                timer.getDuration().asSeconds().should.below(5*60) ;
                done();
            },2000);
        })
    });
    describe('pausing,', function ()  {
       var timeSnapshot ;
        before(function () {
           timer.pause();
           timeSnapshot = moment.duration(timer.getDuration());

       });
       it('should `state.pause` to be true', function () {
           timer.state.should.be.deep.equals({
               pause: true, setted: true, timeEnd: false, start: false, stop: false
           })
       });

       it('should stay the same after 1.5s', function (done) {
           setTimeout(function () {
               timer.getDuration().should.be.deep.equal(timeSnapshot);
               done();
           },1500)
       });


    });

    describe('reseting,', function () {
        before(function () {
            timer.reset();
        });
        it('should `state.stop` be true', function () {
            timer.state.should.be.deep.equals({
                pause: false, setted: true, timeEnd: false, start: false, stop: true
            })
        });
        
        it('time should reset to last setDuration state', function () {
            timer.getDuration().format(durationOption).should.be.equal('00:05:00');
        })
    })


    describe('restart,'); //just call this.reset and this.stop
    describe('stop,'); //just call this.reset
}));

