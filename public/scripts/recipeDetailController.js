angular.module('app')

    .controller('recipeDetailController', function(dataService, $scope){
        //gets categories for dropdown
        dataService.getCategories(function(response){
            $scope.categories = response.data;
        });
        //gets foodItems for dropdown
        dataService.getFoodItems(function(response){
            $scope.foodItems = response.data;
        })
        $scope.saveRecipe = function(recipe){
            console.log(recipe)
            //dataService.addRecipe(recipe);
        }
    });