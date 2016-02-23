/**
 * Created by Pery on 23/02/2016.
 */
describe('timer factory', function () {
    beforeEach(module('app'));
    var durationOption = {
        trim: false,
        template: 'hh:mm:ss'
    };


    it('should setted', inject(function (Timer) {
        var timer = new Timer();
        expect( timer.getDuration().format(durationOption),'00:00:00');
    }));
});