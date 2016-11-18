(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('loginsample')
        .component('profileEdit', {
            templateUrl: 'app/components/users/profile/edit/edit.html',
            controller: Controller,
            bindings: {
                Binding: '='
            }
        });

    Controller.$inject = ['userService', 'toastr', '$state', '$log', 'appName'];

    function Controller(userService, toastr, $state, $log, appName) {
        var $ctrl = this;
        $ctrl.title = 'Edit your profile';
        $ctrl.appName = appName;
        ////////////////

        $ctrl.editProfile = function edit() {
            $ctrl.loading = true;
            return userService.saveProfile($ctrl.profile).then(function(savedProfile) {
                $log.info('Profile edited successfully.', savedProfile);
                toastr.success('Profile saved successfully');
                $ctrl.loading = false;
            }, function(err) {
                $ctrl.loading = false;
                toastr.error('Error saving your profile : ' + err);
                $state.go('login');
            });
        };
        $ctrl.cancel = function cancel() {
            $state.go('login');
        };

        $ctrl.$onInit = function() {
            $ctrl.loading = true;
            userService.getProfile().then(function(profile) {
                $ctrl.loading = false;
                $ctrl.profile = profile;
                $ctrl.profile.dateOfBirth = new Date($ctrl.profile.dateOfBirth);
            }, function(err) {
                $ctrl.loading = false;
                toastr.error('Error fetching your profile : ' + err);
                $state.go('login');
            });
        };
        $ctrl.$onChanges = function() {};
        $ctrl.$onDestory = function() {};
    }
})();