import angular from 'angular';

let navModule = angular.module('app.nav', []);

import navConfig from './nav.config';
navModule.config(navConfig);

import NavCtrl from './nav.controller';
navModule.controller(NavCtrl);

export default navModule;
