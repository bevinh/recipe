angular.module('app')

    .controller('recipeDetailController', function(dataService, $scope, $routeParams, $location){

        this.checkRecipe = function() {
            var url = $location.path()
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
        $scope.saveRecipe = function(recipe){
            var url = $location.path()
            if(url == '/edit/' + recipe._id){
                dataService.updateRecipe(recipe);
            } else {
                dataService.addRecipe(recipe);
            }

            $location.url('/');
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

        $scope.returnToList = function(){
            $location.url('/');
        }

    });