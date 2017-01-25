'use strict';

angular.module('saveBordeauxApp.auth', ['saveBordeauxApp.constants', 'saveBordeauxApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
