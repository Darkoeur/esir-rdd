'use strict';

// Our global application module, asking for dependency injections
angular
    .module('app', ['ngRoute', 'ngAnimate', 'toastr', 'RequestHandler', 'ResponseHandler'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'includes/home.html',
                controller: 'homeController'
            })
            .when('/home', {
                templateUrl: 'includes/home.html',
                controller: 'homeController'
            })
            .when('/go', {
                templateUrl: 'includes/signup.html',
                controller: 'signupController'
            })
            .when('/connect', {
                templateUrl: 'includes/signin.html',
                controller: 'signinController'
            })
            .when('/profil', {
                templateUrl: 'includes/profil.html',
                controller: 'profilController'
            })
            .otherwise({
                templateUrl: 'includes/notfound.html',
                controller: 'voidController'
            });

    });

