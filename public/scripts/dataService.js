angular.module('app')
    .service('dataService', function($http){

        //gets all recipes
        this.getRecipes = function(callback) {
            $http.get('/api/recipes')
                .then(callback);
        };
        //gets one recipe
        this.getRecipe = function(id, callback) {
            $http.get('/api/recipes/' + id)
                .then(callback);
        };
        //gets all categories
        this.getCategories = function(callback) {
            $http.get('/api/categories')
                .then(callback);
        };
        //updates a recipe
        this.updateRecipe = function(dataObj){
            var url = '/api/recipes/' +  dataObj._id
            return $http.put(url, dataObj).then(function(data){
                return data
            }, function(data, status){
                //handle HTTP error
                return data
            })

        };
        //deletes a recipe
        this.deleteRecipe = function(rid, callback){
            var url = '/api/recipes/' +  rid
            $http.delete(url)
                .then(callback)
        };
        //adds a new recipe
        this.addRecipe = function(dataObj) {
           return $http.post('/api/recipes', dataObj).then(function(data){
                return data
           }, function(data, status) {
                // Handle HTTP error
                return data
            })
        };
        //gets the Food Items from the database
        this.getFoodItems = function(callback) {
            $http.get('/api/fooditems ')
                .then(callback)
        }
    })






