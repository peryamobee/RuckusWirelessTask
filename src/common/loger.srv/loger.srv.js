/**
 * Created by pery on 08/02/2016.
 */
module.exports = angular.module(__filename,[])
    .factory('Logger', function () { //todo:change it to loggerTime
        return function ( timer ) {
            /*collection*/
            var logs = new Set();
            var Duration = moment.duration.bind(moment)
                ;
            var durationOption = {
                trim: false,
                template: 'hh:mm:ss'
            };

            _.extend(logs, {
                list: list,
                createLog: createLog
            });

            function list() {
                return Array.from(logs);
            }

            function createLog(player) {
                var startTime = Duration(timer.getDuration());

                var log = {
                    name: player,
                    startTime: startTime.format(durationOption),
                    endTime: 'in progress',
                    duration: 'calculate'
                };
                logs.add(log);
                return function closeLog() {
                    var endTime = timer.getDuration();
                    log.endTime = endTime.format(durationOption);
                    log.duration = startTime.subtract(endTime).format('mm [min] ss [sec]');
                    return log;
                }
            }

            return logs;
        }
    });