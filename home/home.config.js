function HomeConfig($stateProvider){
  'ngInject';

  $stateProvider.state('app.home', {
    url : '/home',
    templateUrl : '/home.html',
    controller : 'MainCtrl',
    resolve : {
      postPromise : ['posts',
      function(posts) {
        return posts.getAll();
    }]

  }
});
};

export default HomeConfig;
