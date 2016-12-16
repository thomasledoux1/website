import angular from 'angular';

let moviesModule = angular.module('app.movies', []);

import moviesConfig from './movies.config';
moviesModule.config(moviesConfig);

import MoviesCtrl from './movies.controller';
moviesModule.controller(MoviesCtrl);

export default moviesModule;
