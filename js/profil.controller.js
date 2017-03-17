'use strict';

/*
    This controller will load the current logged user
    Plus give him an access to the searching tool
*/

angular
    .module('app')
    .controller('profilController', profil);

function profil($sessionStorage, $scope, $location, toastr) {
    
    // Initialization to be done here..
    $scope.nom = 'GAUTRAIN';
    $scope.prenom = 'Antoine';

    $scope.searching = false;
    $scope.navigating = false;

    // Action associated with the searching button
    $scope.switchSearching = function () {
        // Can't navigate and search at the same time
        if(!$scope.navigating){
            $scope.searching = !$scope.searching;
            if ($scope.searching) {
                document.querySelector('.content-row').style.transform = 'scale(0.8)';
            } else {
                document.querySelector('.content-row').style.transform = 'scale(1)';
            }
        } else {
            toastr.info('Le menu est ouvert');
        }
        
    };
    
    // TODO : simplify these two functions into one
    // However in the future they may be very different
    $scope.switchNavigating = function () {
        // Can't navigate and search at the same time
        if(!$scope.searching){
            $scope.navigating = !$scope.navigating;
            if($scope.navigating) document.querySelector('.navigate-button').style.position = 'fixed';
        }
    };
    
    
    $scope.logout = function () {
        $sessionStorage.token = null;
        console.log('Ici le token vaut : ' + $sessionStorage.token);
        toastr.success('Déconnexion réussie !');
        $location.path('/connect');
    };
    
}