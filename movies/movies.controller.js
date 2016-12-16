class MoviesCtrl{
  constructor(movies){
    this.isLoggedIn = auth.isLoggedIn;
    this.movies = movies.movies;
  }

  saveMovie() {
		console.log('testinggg');
		if ($scope.title === '') {
			return;
		}
		movies.create({
			title : $scope.title,
			url : $scope.url,
		});
		//clear the values
		$scope.title = '';
		$scope.url = '';
	};

};
export default MoviesCtrl;
