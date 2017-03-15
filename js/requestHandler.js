// Defining a service named Requests to handle the different requests
'use strict';

angular
    .module('RequestHandler', [])
    .factory('Requests', ['$http', '$q', function ($http, $q) {
        var requests = {};
        
        requests.signinUser = function (email, key) {
            // ajax call here
            
            var host = 'http://109.8.206.12:1337';
            var defer = $q.defer();
            
            // $http.get is asynchronous
            $http
                .get(host + '/user/authenticate?email=' + email + '&key=' + key)
                .then(function worked(response) {
                
                    // No need to parse, it's already an object
                    defer.resolve(response.data);
                
                }, function failed(serverResponse) {
                
                    console.log(serverResponse.status);
                    var givenResponse = {};
                    givenResponse.success = false;
                    givenResponse.message = serverResponse.status + ' : ' + serverResponse.statusText;
                    defer.resolve(givenResponse);
                });
            
            
            /*
                FAKE RESPONSES READY TO USE
                var msg1 = {success:true, message:''};
                var msg2 = {success:false, message:'No user found'};
            */
            return defer.promise;
        };
        
        return requests;
        
    }]);