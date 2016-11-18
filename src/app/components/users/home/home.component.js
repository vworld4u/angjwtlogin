(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('loginsample')
        .component('homePage', {
            templateUrl: 'app/components/users/home/home.html',
            controller: Controller,
            bindings: {
                Binding: '='
            }
        });

    Controller.$inject = ['$state', 'appName'];

    function Controller($state, appName) {
        var $ctrl = this;
        $ctrl.appName = appName;


        ////////////////
        $ctrl.editProfile = function() {
            $state.go('pedit');
        };
        $ctrl.$onInit = function() {};
        $ctrl.$onChanges = function() {};
        $ctrl.$onDestory = function() {};
    }
})();