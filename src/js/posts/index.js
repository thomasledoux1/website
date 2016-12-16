import angular from 'angular';

let postsModule = angular.module('app.posts', []);

import PoststConfig from './posts.config';
postsModule.config(PostsConfig);


import PostsCtrl from './posts.controller';
postsModule.controller('PostsCtrl', PostsCtrl);

export default articleModule;
