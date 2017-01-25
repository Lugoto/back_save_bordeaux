'use strict';

angular.module('saveBordeauxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('donation', {
        url: '/donation',
        template: '<donation></donation>'
      });
  });
