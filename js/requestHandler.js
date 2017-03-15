// Defining a service named Requests to handle the different requests
'use strict';

angular
    .module('RequestHandler', [])
    .factory('Requests', ['$http', function ($http) {
        var requests = {};
        
        requests.signinUser = function (email, key) {
            // ajax call here
            $http({
                method: 'GET',
                url: '/users/authenticate?email=' + email + '&key=' + key
            }).then(function worked(response) {
                // Just parsing, don't mind me
                var ourResponse = JSON.parse(response);
                console.log(ourResponse);
                
            }, function failed(serverResponse) {
                
                console.log(serverResponse.status);
                var ourResponse = {};
                ourResponse.success = false;
                ourResponse.message = serverResponse.status + ' : ' + serverResponse.statusText;
            });
            
            
            /*
                FAKE RESPONSES READY TO USE
                var msg1 = {success:true, message:''};
                var msg2 = {success:false, message:'No user found'};
            */
            
            return ourResponse;
        };
        
        return requests;
        
    }]);