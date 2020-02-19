var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/index.html",
        controller: "defaultController" 
    })
    .when("/about", { 
        templateUrl: "views/aboutus.html",
        controller: "defaultController" 
    })
    .when("/contact", { 
        templateUrl: "views/contactus.html",
        controller: "defaultController" 
    })
})

app.controller("defaultController", function($scope) {
    $scope.staff = [
        { image: "girl.png", title: "Anna Andersson", text: "Head Editor" },
        { image: "girl2.png", title: "Bea Bengtsson", text: "Wedding Editor" },
        { image: "girl3.png", title: "Cissi Carlsson", text: "Travel Editor" },
        { image: "girl4.png", title: "Daniella Dhalgren", text: "Action Editor" },
        { image: "girl5.png", title: "Erika Eriksson", text: "Let's Play Editor" },
        { image: "girl6.png", title: "Felicia Fredriksson", text: "SPX Creator" },
        { image: "girl7.png", title: "Ginni Green", text: "Animator" },
    ]
})

// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: '<header> <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom d-flex justify-content-around"> <a class="navbar-brand ml-2" href="#/!"> <img src="images/Logo_sample_3_20200204.jpg" width="30" height="30" class="d-inline-block align-top" alt=""> 4U Editing </a><div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav"><li class="nav-item mr-5"> <a class="nav-link" href="#!aboutus.html">About Us <span class="sr-only">(current)</span></a></li><li class="nav-item mr-5"> <a class="nav-link" href="#!contactus.html">Contact Us</a></li><li class="nav-item mr-2"> <a class="nav-link" href="#">Terms & Conditions</a></li></ul></div> </nav> </header>'
    }
})

app.directive("aboutustext", function(){
    return {
        tepmplate: '<div class= "container bg-light-custom custom-text-color d-flex align-items-center justify-content-center p-5"><div class="p-4"><h5 class="font-weight-bold text-center pb-4">About us</h5><div class="m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore architecto tempore quod quidem voluptatibus deserunt! Maxime natus modi, corporis delectus sit earum porro magni facere voluptatibus laborum sapiente. Ipsum?</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores dolores, dolor magni quaerat aperiam eum iure cumque saepe dolore ipsam ipsa, aut velit? Dolore assumenda reiciendis, praesentium architecto provident voluptatibus facere possimus asperiores perspiciatis veniam? Dolorum voluptas necessitatibus, perspiciatis neque rem vero, nulla nesciunt inventore porro reiciendis eos beatae.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquam doloribus beatae? Aliquam ab voluptatibus voluptatem ut voluptates saepe fuga quidem excepturi quis reiciendis inventore quibusdam nulla fugiat molestiae consequatur reprehenderit laboriosam, pariatur officiis eveniet sequi sit suscipit obcaecati quas?</p></div></div></div>'
    }
})