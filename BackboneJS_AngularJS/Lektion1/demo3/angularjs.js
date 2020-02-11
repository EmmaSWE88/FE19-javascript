let app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/home.html", 
        controller: "homeController"
    })
    .when("/about", {
        templateUrl: "views/about.html", 
        controller: "aboutController"
    })
    .when("/contact", {
        templateUrl: "views/contact.html", 
        controller: "contactController"
    })
})

//Controllers 
app.controller("homeController", function($scope) {
    $scope.pageTitle = "Home";
})
app.controller("aboutController", function($scope) {
    $scope.pageTitle = "About";
})
app.controller("contactController", function($scope) {
    $scope.pageTitle = "Contact";
})