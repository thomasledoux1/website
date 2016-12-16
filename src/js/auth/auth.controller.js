
class AuthCtrl{
	constructor(User, $state){
		'ngInject';
		
		this._User = User;
		this._$state = $state;
		
		this.title = $state.current.title;
		this.authType = $state.current.name.replace('app', '');
		
	}
	
	
}('$scope', '$state', 'auth'){
  $scope.user = {};

	$scope.register = function() {
		auth.register($scope.user).error(function(error) {
			$scope.error = error;
		}).then(function() {
			$state.go('home');
		});
	};

	$scope.logIn = function() {
		auth.logIn($scope.user).error(function(error) {
			$scope.error = error;
		}).then(function() {
			$state.go('home');
		});
	};
};
