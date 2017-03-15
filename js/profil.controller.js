'use strict';

/*
    This controller will load the current logged user
    Plus give him an access to the searching tool
*/

angular
    .module('app')
    .controller('profilController', function ($scope, $location, toastr) {
    
        // Initialization to be done here..
        $scope.working = "This website is powered by Angular.";
        $scope.nom = 'GAUTRAIN';
        $scope.prenom = 'Antoine';

        $scope.searching = false;

        // Action associated with the searching button
        $scope.switchSearching = function () {

            $scope.searching = !$scope.searching;

            if ($scope.searching) {
                document.querySelector('.content-row').style.transform = 'scale(0.8)';
            } else {
                document.querySelector('.content-row').style.transform = 'scale(1)';
            }
        };
    });