(function() {
    'use strict';

    angular
        .module('loginsample')
        .factory('userService', Service);

    Service.$inject = ['$http', '$q', '$window'];

    function Service($http, $q, $window) {
        var service = {
            register: register,
            login: login,
            getProfile: getProfile,
            saveProfile: editProfile
        };

        return service;

        ////////////////
        function register(user) {
            return $http.post('/register', user).then(function(response) {
                var savedUser = response && response.data || undefined;
                return savedUser ? $q.when(savedUser) : $q.reject('Error registering user. Please try again after sometime');
            }, function(err) {
                var message = err.data.message || 'Error registering the user. Please try after sometime';
                return $q.reject(message);
            });
        }

        function login(creds) {
            return $http.post('/login', creds).then(function(response) {
                var savedUser = response && response.data || undefined;
                if (response.headers().authorization) {
                    $window.sessionStorage.token = response.headers().authorization;
                }
                return savedUser ? $q.when(savedUser) : $q.reject('Error logging in user. Please try again after sometime');
            }, function(err) {
                var message = err.data.message || 'Error logging in the user. Please try after sometime';
                return $q.reject(message);
            });
        }

        function getProfile(user) {
            return $http.get('/profile', user).then(function(response) {
                var savedUser = response && response.data || undefined;
                return savedUser ? $q.when(savedUser) : $q.reject('Error fetching profile of you. Please try again after sometime');
            }, function(err) {
                var message = err.data.message || 'Error fetching profile of you. Please try after sometime';
                return $q.reject(message);
            });
        }

        function editProfile(user) {
            return $http.put('/profile', user).then(function(response) {
                var savedUser = response && response.data || undefined;
                return savedUser ? $q.when(savedUser) : $q.reject('Error updating the profile. Please try again after sometime');
            }, function(err) {
                var message = err.data.message || 'Error updating the profile. Please try after sometime';
                return $q.reject(message);
            });
        }
    }
})();