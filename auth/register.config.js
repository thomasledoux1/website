function RegisterConfig($stateProvider){
  'ngInject';

  stateProvider
  .state('app.register', {
    url : '/register',
		templateUrl : '/register.html',
		controller : 'AuthCtrl',
		onEnter : ['$state', 'auth',
		function($state, auth) {
			if (auth.isLoggedIn()) {
				$state.go('home');
			}
		}]
  });
};

export default RegisterConfig;
