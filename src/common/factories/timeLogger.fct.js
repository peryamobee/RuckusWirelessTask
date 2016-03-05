/**
 * Created by pery on 08/02/2016.
 */
module.exports = angular.module(__filename,[])
    .factory('TimeLogger', function () { //todo:change it to loggerTime
        return function ( timer ) {
            /*collection*/
            var logs = new Set();
            var Duration = moment.duration.bind(moment);
            var summary =  moment.duration();
            var summaryText = '';

            var durationOption = {
                trim: false,
                template: 'hh:mm:ss'
            };

            /** API **/
            _.extend(logs, {
                list: list,
                createLog: createLog
            });
            Object.defineProperty(logs, 'summary', {
                get: function () {
                    return  summaryText;
                }
            });

            /** end API **/
            function list() {
                return Array.from(logs);
            }

            function createLog(player) {
                var startTime = Duration(timer.getDuration());

                var log = {
                    name: player,
                    startTime: startTime.format(durationOption),
                    endTime: '',
                    duration: ''
                };
                logs.add(log);
                return function closeLog( final ) {
                    var endTime = timer.getDuration();
                    var duration = Duration(startTime).subtract(endTime);
                    log.endTime = endTime.format(durationOption);
                    var template =  (duration.asSeconds() > 0)?
                        'h[hrs] mm[min] ss[s]':
                        'h[hrs] mm[min] ss[s] SSS[ml]';
                    log.duration = duration.format( template ) ;


                    summaryText = Duration(summary).add( duration ).format(durationOption);
                    final && summary.add( duration );

                    return log;
                }
            }

            return logs;
        }
    });