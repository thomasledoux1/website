function MoviesConfig($stateProvider){
  'ngInject';

$stateProvider
.state('app.movies', {
  url : '/movies',
  templateUrl : '/movies.html',
  controller : 'MoviesCtrl',

  resolve : {
    postPromise : [ 'movies',
    function(movies) {
      return movies.getAll();
    }]

  }
});
};

export default MoviesConfig;
