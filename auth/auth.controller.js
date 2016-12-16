class AuthCtrl{
  constructor($state, auth) {
    this.user = {};
  }

  register() {
		auth.register(this.user).error(function(error) {
			this.error = error;
		}).then(function() {
			$state.go('home');
		});
	};


  logIn() {
		auth.logIn(this.user).error(function(error) {
			this.error = error;
		}).then(function() {
			$state.go('home');
		});
	};
};

export default AuthCtrl;
