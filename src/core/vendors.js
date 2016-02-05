/* Styles */
  require('./vendors.scss');

/* JS */
global.$ = global.jQuery = require('jquery');
global._ = require('lodash/lodash.js');

require('angular');
global.moment = require('moment');

/* angular vendors */
require('ui-router');
require('angular-ui-router.statehelper');
