describe('PostsCtrl', function() {
  var $controller, PostsCtrl;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('flapperNews'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    PostsCtrl = $controller('PostsCtrl', {});
  }));

  it('should exist', function() {
    expect(PostsCtrl).toBeDefined();
  });


});
