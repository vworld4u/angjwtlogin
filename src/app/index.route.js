(function() {
    'use strict';

    angular
        .module('loginsample')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home-page></home-page>'
            }).state('login', {
                url: '/login',
                template: '<div class="container" style="margin-top: 200px"><login></login></div>'
            }).state('register', {
                url: '/register',
                template: '<div class="container" style="margin-top: 200px"><register></register></div>'
            }).state('pedit', {
                url: '/pedit',
                template: '<div class="container" style="margin-top: 200px"><profile-edit></profile-edit></div>'
            });

        $urlRouterProvider.otherwise('/login');
    }

})();