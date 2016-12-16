var movies = angular.module('app.movies');

movies.factory('movies', ['$http',
function($http) {
	var o = {
		movies : []
	};

	o.getAll = function() {
		return $http.get('/movies').success(function(data) {

			angular.copy(data, o.movies);
			console.log(o.movies);
		});
	};

	o.create = function(movie) {
	  return $http.post('/movies', movie, {
	  }).success(function(data){
	    o.movies.push(data);
	  });
	};


	return o;
}]);
