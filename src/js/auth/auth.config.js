function AuthConfig($stateProvider, $httpProvider){
  'ngInject';

  $stateProvider.
  state('app.login', {
    url : '/login',
    controller : 'AuthCtrl as $ctrl',
    templateUrl : 'auth/auth.html',
    title : 'Sign in',
    resolve : {
      postPromise : ['posts',
			function(posts) {
				return posts.getAll();
			}]

    }
  }).
  state('app.register', {
    url : '/register',
    controller : 'AuthCtrl as $ctrl',
    templateUrl : 'auth/auth.html',
    title : 'Register',
    resolve : {
      onEnter : ['$state', 'auth',
  		function($state, auth) {
  			if (auth.isLoggedIn()) {
  				$state.go('home');
  			}
  		}]
    }
  });
};

export default AuthConfig;
