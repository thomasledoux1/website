var app = angular.module('mijnWebsite', ['ui-router']);



app.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url : '/home',
      templateUrl : '/home.html',
      controller : 'MainCtrl'
    });
    $urlRouterProvider.otherwise('home');
  }
])
.state('sports', {
  url : '/posts/{id}',
  templateUrl : '/sports.html',
  controller : 'SportsCtrl'
});

app.factory('sports', [function(){
  var o = {
    sports : []
  };
  return o;
}]);

app.controller('MainCtrl', [
  '$scope', 'sports'
  function($scope, sports){
    $scope.test = 'Hello world';
    $scope.sports = sports.sports;
  },
  $scope.addSport = function() {
    if(!$scope.title || $scope.title===''){return;}
    $scope.sports.push({
      title : $scope.title,
      link : $scope.link
    });
    $scope.title = '';
    $scope.link = '';
  }
]);

app.controller('SportsCtrl', [
  '$scope',
  '$stateParams',
  'spots',
  function($scope, $stateParams, sports){
      $scope.sport = sports.sports[$stateParams.id];
  }
]);
