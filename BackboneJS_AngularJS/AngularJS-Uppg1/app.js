var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/aboutus.html",
        controller: "defaultController" 
    })
})

// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: '<header> <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom d-flex justify-content-around"> <a class="navbar-brand ml-2" href="#/!"> <img src="images/Logo_sample_3_20200204.jpg" width="30" height="30" class="d-inline-block align-top" alt=""> 4U Editing </a><div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav"><li class="nav-item mr-5"> <a class="nav-link" href="#!aboutus.html">About Us <span class="sr-only">(current)</span></a></li><li class="nav-item mr-5"> <a class="nav-link" href="#!contactus.html">Contact Us</a></li><li class="nav-item mr-2"> <a class="nav-link" href="#">Terms & Conditions</a></li></ul></div> </nav> </header>'
    }
})