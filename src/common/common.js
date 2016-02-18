/**
 * Created by pery on 06/02/2016.
 */

require('./styleFx/elegantShadow.scss');
require('./styleFx/shadowFx.scss');
require('./style/guildStyle.scss');
require('./style/customize-menu.scss');
require('./style/model-edit-timer.scss');

module.exports = angular.module(__filename, [
    require('./timer.drv/timer.drv.js').name
    ,require('./tickTock.drv/tickTock.drv').name
    ,require('./timer.drv/timer.fct').name
    ,require('./timeLogger.fct/timeLogger.fct').name
    ,require('./context.srv/context.srv').name
    ,require('./toggle.drv/toggle').name
    ,require('./classToggle.drv/classToggle').name

])
    .run(function () {
    console.log('common run');
});