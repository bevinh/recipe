(function() {
    'use strict';
angular.module('app')

    .controller('recipeDetailController', function(dataService, $scope, $routeParams, $location){

        //function that checks to see whether you're in add or edit mode, to provide the appropriate info
        this.checkRecipe = function() {
            var url = $location.path();
            if (url == '/add') {

                $scope.recipe = {
                    name: '',
                    description: '',
                    category: '',
                    prepTime: '',
                    cookTime: '',
                    ingredients: [{foodItem: '', condition: '', amount: ''}],
                    steps: [{description: ''}]
                };

            } else {
                //gets the individual recipe
                dataService.getRecipe($routeParams.id, function (response) {
                    $scope.recipe = response.data
                });
            }
        };

        this.checkRecipe();


        //gets categories for dropdown
        dataService.getCategories(function(response){
            $scope.categories = response.data;
        });

        //gets foodItems for dropdown
        dataService.getFoodItems(function(response){
            $scope.foodItems = response.data;
        });

        //save recipe function, including validation
        $scope.saveRecipe = function(recipe){
            var url = $location.path();

            //if in edit mode, use update recipe
            if(url == '/edit/' + recipe._id){
                dataService.updateRecipe(recipe).then(function(data){
                    if(data.status == '400'){
                        $scope.errors = [];
                        var obj = data.data.errors;
                        for (var key in obj) {
                            $scope.errors.push(data.data.errors[key][0])
                        }
                    } else {
                        $location.url('/');
                    }
                })
            } else {
            //if in add mode, use add recipe
                dataService.addRecipe(recipe).then(function(data){
                    if(data.status == '400'){
                        $scope.errors = [];
                        var obj = data.data.errors;
                        for (var key in obj) {
                            $scope.errors.push(data.data.errors[key][0])
                        }
                    } else {
                        $location.url('/');
                    }

                })

            }

        };

        //function to add an ingredient
        $scope.addRecipeItem = function() {
                 $scope.recipe.ingredients.push({name: '', condition: '', amount: '' })
        };

        //function to add a step
        $scope.addStep = function() {
            $scope.recipe.steps.push({description: '' })
        };

        //function to remove an ingredient
        $scope.removeRecipeIngredient = function(index, recipe){
            var ingredient = recipe.ingredients[index];
            if(ingredient.id){
                ingredient._destroy = true;
            }else{
                recipe.ingredients.splice(index, 1);
            }
        };

        //function to remove a step
        $scope.removeStep = function(index, recipe){
            var step = recipe.steps[index];
            if(step.id){
                step._destroy = true;
            }else{
                recipe.steps.splice(index, 1);
            }
        };

        //function to return to the home screen without acting
        $scope.returnToList = function(){
            $location.url('/');
        }

    })
})();