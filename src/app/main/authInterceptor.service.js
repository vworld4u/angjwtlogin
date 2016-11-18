(function() {
    'use strict';

    angular
        .module('loginsample')
        .factory('authInterceptor', Service);

    Service.$inject = ['$q', '$window'];

    function Service($q, $window) {
        var service = {
            request: request
        };

        return service;

        ////////////////
        function request(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage && $window.sessionStorage.token) {
                config.headers.authorization = $window.sessionStorage.token;
            }
            return config;
        }
    }
})();