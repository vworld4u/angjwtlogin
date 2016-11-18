(function() {
  'use strict';

  angular
    .module('loginsample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
