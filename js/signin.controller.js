'use strict';

/*
    This controller will (like the signup one) :
        - check data to avoid useless submit button clicks
        - treat the answer of the backend properly
*/

angular
    .module('app')
    .controller('signinController', ['$scope', '$location', 'toastr', 'Requests', 'Responses', function($scope, $location, toastr, Requests, Responses){
        $scope.working = 'This website is powered by Angular.';
        
        $scope.submit = function(){
            var promise = Requests.signinUser(email.value, code.value);
            
            // Result object is a JSON with two components
            // - a boolean "success"
            // - a string "message"
            
            promise.then(function completed(it){
                Responses.display(it);
            }, function failed(it){
                
            });
        };
    }]);