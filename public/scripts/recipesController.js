(function() {
    'use strict';
angular.module('app')

.controller('recipesController', function(dataService, $scope, $location, $window){

    //gets all recipes
    dataService.getRecipes(function(response){
       $scope.allrecipes = response.data;
   });

    //gets categories for dropdown
    dataService.getCategories(function(response){
        $scope.categories = response.data;
    });

    //funtion to add a new recipe
    $scope.addNewRecipe = function(){
        $location.path("/add")
    };

    //function to edit a recipe
    $scope.goToRecipe = function(rid) {
        var path  = '/edit/' + rid;
        $location.url(path)
    };

    //function to delete a recipe
    $scope.deleteRecipe = function(rid){
        if ( window.confirm('Are you sure you want to delete this recipe?') ) {
            dataService.deleteRecipe(rid);
            $window.location.reload();
        }

    };

    });
})();



