// Defining a service named Requests to handle the different requests
'use strict';

angular
    .module('RequestHandler', [])
    .factory('Requests', ['$http', '$q', function ($http, $q) {
        var requests = {};
        
        // CREATING A NEW USER THANKS TO THE FORM FILLED
        requests.signupUser = function (prenom, nom, specialite, email, code) {
            var host = 'http://109.8.206.12:1337';
            var defer = $q.defer();
            
            var query = {
                method: 'PUT',
                url: host + '/signup',
                data: {prenom: prenom, nom: nom, email: email, specialite: specialite, code: code}
            };
            
            $http(query).then(function worked(response) {
                // No need to parse, it's already an object
                defer.resolve(response.data)
            }, function failed(serverResponse) {
                var response = {};
                response.success = false;
                response.message = 'Impossible de joindre le serveur'
            });
                            
                            
            return defer.promise;
        };
        
        
        // SIGNIN A USER TO START THE AUTHENTICATION PROCESS
        requests.signinUser = function (email, key) {
            // ajax call here
            
            var host = 'http://109.8.206.12:1337';
            var defer = $q.defer();
            
            var query = {
                method: 'PUT',
                url: host + '/signin',
                data: {email: email, code: key}
            };
            
            // $http.get is asynchronous
            $http(query)
                .then(function worked(response) {
                
                    defer.resolve(response.data);
                
                }, function failed(serverResponse) {
                
                    var givenResponse = {};
                    givenResponse.success = false;
                    givenResponse.message = 'Impossible de joindre le serveur';
                    defer.resolve(givenResponse);
                
                });
    
            return defer.promise;
        };
        
        return requests;
        
    }]);