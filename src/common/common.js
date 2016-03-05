/**
 * Created by pery on 06/02/2016.
 */

require('./style/elegant-shadow.fx.scss');
require('./style/shadow.fx.scss');
require('./style/guide-style.scss');
require('./style/side-menu.scss');
require('./style/control-pannel.scss');
require('./style/log-table.scss');
require('./style/top-bar.scss');

module.exports = angular.module(__filename, [
    require('./visual/timer.drv/timer.drv.js').name
    ,require('./visual/tickTock.drv/tickTock.drv').name
    ,require('./factories/timer.fct.js').name
    ,require('./factories/timeLogger.fct.js').name
    ,require('./services/context.srv/context.srv').name
    ,require('./inputs/toggle.drv/toggle').name
    ,require('./helpers/classToggle.drv/classToggle').name

])
