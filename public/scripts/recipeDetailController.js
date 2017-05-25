angular.module('app')

    .controller('recipeDetailController', function(dataService, $scope, $compile){
        $scope.recipe = {ingredients: [{name: '', condition: '', amount: ''}]}
        //gets categories for dropdown
        dataService.getCategories(function(response){
            $scope.categories = response.data;
        });
        //gets foodItems for dropdown
        dataService.getFoodItems(function(response){
            $scope.foodItems = response.data;
        });
        $scope.saveRecipe = function(recipe){
            console.log(recipe)
            //dataService.addRecipe(recipe);
        };
        $scope.addRecipeItem = function() {
                 $scope.recipe.ingredients.push({name: '', condition: '', amount: '' })
        };
        $scope.removeRecipeIngredient = function(index, recipe){
            var ingredient = recipe.ingredients[index];
            if(ingredient.id){
                ingredient._destroy = true;
            }else{
                recipe.ingredients.splice(index, 1);
            }
        };

    });