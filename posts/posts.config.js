function PostsConfig($stateProvider){
  'ngInject';

  $stateProvider
  .state('app.posts', {
    url : './posts',
		templateUrl : '/posts.html',
		controller : 'PostsCtrl',
		resolve : {
			post : ['$stateParams', 'posts',
			function($stateParams, posts) {
				return posts.get($stateParams.id);
			}]
    }

  });
};

export default PostsConfig;
