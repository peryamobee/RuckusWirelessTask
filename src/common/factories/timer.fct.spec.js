//var assert = require('assert');
var should = chai.should();
//chai.should();

//var assert = chai.assert;
mocha.allowUncaught();
describe('timer factory:', (function ($timeout) {

    var timer ;

    var durationOption = {
        trim: false,
        template: 'hh:mm:ss.SSS'
    };
    var $timeout = null;

    beforeEach(angular.mock.module('app')); //why before not work here
    //beforeEach(angular.mock.module(require('./timer.fct').name)); //why before not work here

    beforeEach(inject(function (_$timeout_) {
        $timeout = _$timeout_;
    }));

    it('should exist',inject(function (Timer) {
        timer = new Timer();
        should.exist(timer);
    }));

    it('default duration', inject(function () {
        timer.getDuration().format(durationOption).should.equal('00:00:00.000');
    }));

    it('init state', function () {
        timer.state.should.be.deep.equals({
            pause: true, setted: false, timeEnd: false, start: false, stop: true
        })
    });

    it('set to 02:05:30', inject(function () {
        timer.setDuration('02:05:30');
        should.equal( timer.getDuration().format(durationOption) , '02:05:30.000');
        timer.state.should.be.deep.equals({
            pause: true, setted: true, timeEnd: false, start: false, stop: true
        })
    }));

    it('use other format', function () {
        console.log('`03h 20m 12s 4ms`');
        timer.setDuration('03h 20m 12s 4ms');
        should.equal( timer.getDuration().format(durationOption) , '03:20:12.004');
        console.log('`1hour 2m 3seconds 4ms`');
        timer.setDuration('1hour 2m 3seconds 4ms');
        should.equal( timer.getDuration().format(durationOption) , '01:02:03.004');
    });



    it('set to 00:05:00', inject(function () {
        timer.setDuration('00:05:00');
        should.equal( timer.getDuration().format(durationOption) , '00:05:00.000');
    }));



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
            timer.getDuration().format(durationOption).should.be.equal('00:05:00.000');
        })
    });


    //describe('restart,'); //just call this.reset and this.stop
    //describe('stop,'); //just call this.reset
}));

