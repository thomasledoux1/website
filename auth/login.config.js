function LoginConfig($stateProvider){
  'ngInject';

  stateProvider
  .state('app.login', {
    url : '/login',
		templateUrl : '/login.html',
		controller : 'AuthCtrl',
		onEnter : ['$state', 'auth',
		function($state, auth) {
			if (auth.isLoggedIn()) {
				$state.go('home');
			}
		}]
  });
};

export default LoginConfig;
