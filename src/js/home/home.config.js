function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve : {
			postPromise : ['posts',
			function(posts) {
				return posts.getAll();
			}]

		}
  });

};

export default HomeConfig;
