(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('loginsample')
        .component('login', {
            templateUrl: 'app/components/login/login.html',
            controller: Controller,
            bindings: {
                Binding: '='
            }
        });

    Controller.$inject = ['appName', '$log', 'userService', '$state'];

    function Controller(appName, $log, userService, $state) {
        var $ctrl = this;
        $ctrl.title = 'Please login with your registered email and password'
        $ctrl.appName = appName;
        $ctrl.credentials = {
            email: 'venk@gmail.com',
            password: 'pass'
        };

        ////////////////
        $ctrl.login = function signup() {
            $log.log('login ... ', $ctrl.credentials);
            userService.login($ctrl.credentials).then(function(user) {
                $log.info('User logged in successfully: ', user);
                $state.go('home');
            }, function(err) {
                $log.error('login failed : ', err);
                $ctrl.errorMessage = err;
            });
        };
        $ctrl.$onInit = function() {};
        $ctrl.$onChanges = function() {};
        $ctrl.$onDestory = function() {};
    }
})();