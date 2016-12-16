import angular from 'angular';

let homeModule = angular.module('app.home', []);

import homeConfig from './home.config';
homeModule.config(homeConfig);

import HomeCtrl from './home.controller';
homeModule.controller(HomeCtrl);

export default homeModule;
