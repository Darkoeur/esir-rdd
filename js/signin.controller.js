'use strict';

/*
    This controller will (like the signup one) :
        - check data to avoid useless submit button clicks
        - treat the answer of the backend properly
*/

angular
    .module('app')
    .controller('signinController', function($scope, $location, toastr){
        $scope.working = 'This website is powered by Angular.';
    });