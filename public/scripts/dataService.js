angular.module('app')
    .service('dataService', function($http){

        this.getRecipes = function(callback) {
            $http.get('/api/recipes')
                .then(callback);
        }

        this.getCategories = function(callback) {
            $http.get('/api/categories')
                .then(callback);
        }

        this.addRecipe = function(callback) {
            $http.post('/api/recipes')
                .then(callback)
        }

        this.getFoodItems = function(callback) {
            $http.get('/api/fooditems ')
                .then(callback)
        }
    });





