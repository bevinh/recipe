angular.module('app')

.controller('recipesController', function(dataService, $scope, $location){

    //gets all recipes
    dataService.getRecipes(function(response){
       $scope.allrecipes = response.data;
   });

    //gets categories for dropdown
    dataService.getCategories(function(response){
        $scope.categories = response.data;
    });
    $scope.addNewRecipe = function(){
        $location.path("/add")
    }

});



