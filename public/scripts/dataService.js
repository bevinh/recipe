angular.module('app')
    .service('dataService', function($http){

        this.getRecipes = function(callback) {
            $http.get('/api/recipes')
                .then(callback);
        }
        this.getRecipe = function(id, callback) {
            $http.get('/api/recipes/' + id)
                .then(callback);
        }

        this.getCategories = function(callback) {
            $http.get('/api/categories')
                .then(callback);
        }
        this.updateRecipe = function(dataObj, callback){
            var url = '/api/recipes/' +  dataObj._id
            $http.put(url, dataObj)
                .then(callback)
        }
        this.addRecipe = function(dataObj, callback) {
            $http.post('/api/recipes', dataObj)
                .then(function(response){
                    console.log(response);
                })
        };

        this.getFoodItems = function(callback) {
            $http.get('/api/fooditems ')
                .then(callback)
        }
    });





