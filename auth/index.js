import angular from 'angular';

let authModule = angular.module('app.auth', []);

import loginConfig from './login.config';
authModule.config(loginConfig);

import registerConfig from './register.config';
authModule.config(registerConfig);

import AuthCtrl from './auth.controller';
authModule.controller(AuthCtrl);

export default authModule;
