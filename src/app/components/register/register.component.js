(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('loginsample')
        .component('register', {
            templateUrl: 'app/components/register/register.html',
            controller: Controller,
            bindings: {
                Binding: '='
            }
        });

    Controller.$inject = ['appName', '$log', 'userService', 'toastr', '$state'];

    function Controller(appName, $log, userService, toastr, $state) {
        var $ctrl = this;
        $ctrl.appName = appName;
        $ctrl.title = 'Registration Form';
        $ctrl.user = {
            userType: 'Student',
            name: 'Venk',
            email: 'venk@gmail.com',
            dateOfBirth: new Date('2016-04-01'),
            password: 'pass'
        };

        ////////////////
        $ctrl.signup = function signup() {
            $log.log('User Submitted ... ', $ctrl.user);
            $ctrl.loading = true;
            userService.register($ctrl.user).then(function(savedUser) {
                $log.info('savedUser: ', savedUser);
                $ctrl.loading = false;
                toastr.success('You have registered successfully to our services. Please login now.');
                $ctrl.cancel();
            }, function(err) {
                $ctrl.loading = false;
                toastr.error(err);
            });
        };

        $ctrl.cancel = function cancel() {
            $state.go('login');
        };

        $ctrl.$onInit = function() {};
        $ctrl.$onChanges = function() {};
        $ctrl.$onDestory = function() {};
    }
})();