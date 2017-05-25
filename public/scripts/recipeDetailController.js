angular.module('app')

    .controller('recipeDetailController', function(dataService, $scope, $compile){
        $scope.recipe = {ingredients: [{name: '', condition: '', amount: ''}], steps: [{description: ''}]};
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

        $scope.addStep = function() {
            $scope.recipe.steps.push({description: '' })
        };

        $scope.removeRecipeIngredient = function(index, recipe){
            var ingredient = recipe.ingredients[index];
            if(ingredient.id){
                ingredient._destroy = true;
            }else{
                recipe.ingredients.splice(index, 1);
            }
        };

        $scope.removeStep = function(index, recipe){
            var step = recipe.steps[index];
            if(step.id){
                step._destroy = true;
            }else{
                recipe.steps.splice(index, 1);
            }
        };

    });