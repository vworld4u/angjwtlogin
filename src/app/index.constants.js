/* global window:false, moment:false */
(function(window) {
    'use strict';

    angular
        .module('loginsample')
        .constant('_', window.lodash)
        .value('appName', 'Login Sample')
        .constant('moment', moment);

})(window);