'use strict';

angular.module('saveBordeauxApp', ['saveBordeauxApp.auth', 'saveBordeauxApp.admin',
    'saveBordeauxApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
