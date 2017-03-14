var app = angular.module("app", ["ngRoute", "ngAnimate", "toastr"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "includes/home.html",
        controller: "homeController"
    })
    .when("/home", {
        templateUrl: "includes/home.html",
        controller: "homeController"
    })
    .when("/go", {
        templateUrl: "includes/signup.html",
        controller: "signupController"
    })
    .when("/connect", {
        templateUrl: "includes/signin.html",
        controller: "signinController"
    })
    .when("/profil", {
        templateUrl: "includes/profil.html",
        controller: "profilController"
    })
    .otherwise({
        templateUrl: "includes/notfound.html",
        controller: "voidController"
    });
    
    
});

app.controller("homeController", function($scope, $location, $timeout){
    $scope.working = "This website is powered by Angular.";
    $scope.year = 2017;
    
    $timeout(function(){
        console.log('bye');
        $location.path('/go');
        
    }, 2000);
});
    
app.controller("signupController", function($scope, $location, toastr){
    $scope.working = "This website is powered by Angular.";
    // toastr.info('Accéder au champ de connexion', 'Connexion');
});

app.controller("signinController", function($scope, $location, toastr){
    $scope.working = "This website is powered by Angular.";
});

app.controller("profilController", function($scope, $location, toastr){
    $scope.working = "This website is powered by Angular.";
    $scope.nom = 'GAUTRAIN';
    $scope.prenom = 'Antoine';
});

app.controller("voidController", function($scope, $location, toastr){
    $scope.working = "This website is powered by Angular.";
});

