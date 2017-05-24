angular.module('app')
    .service('dataService', function($http){
        this.getRecipes = function(callback) {
            $http.get('/api/recipes')
                .then(callback);
        }
    })
.controller('recipesController', function(dataService, $scope){

    dataService.getRecipes(function(response){
        console.log(response.data);
       $scope.allrecipes = response.data;
   });

});



