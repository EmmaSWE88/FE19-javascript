angular.module("demoApp", [])
.controller("ratingController", function($scope){
    $scope.likes = 0;
    $scope.dislikes = 0;

    // $scope.incrementLikes = function(){
    //     $scope.likes++;
    // }

    // $scope.incrementDislikes = function(){
    //     $scope.dislikes++;
    // }

    $scope.increment = function(target){
        if(target === "like") {
            $scope.likes++;
        }
        
    }
})