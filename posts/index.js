import angular from 'angular';

let postsModule = angular.module('app.posts', []);

import postsConfig from './posts.config';
postsModule.config(postsConfig);

import PostsCtrl from './posts.controller';
postsModule.controller(PostsCtrl);

export default postsModule;
