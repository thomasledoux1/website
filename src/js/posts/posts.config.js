function PoststConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.posts', {
    url: '/posts/:id',
    controller: 'PostsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'posts/posts.html',
    title: 'Posts',
    resolve : {
			post : ['$stateParams', 'posts',
			function($stateParams, posts) {
				return posts.get($stateParams.id);
			}]

		}
  });

};

export default HomeConfig;
