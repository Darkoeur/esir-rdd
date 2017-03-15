'use strict';

/*
    Nothing special yet
    maybe will display some information on the broken link
*/

angular
    .module('app')
    .controller('voidController', function($scope, $location, toastr){
        $scope.working = 'This website is powered by Angular.';
    });