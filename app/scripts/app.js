'use strict';

/**
 * @ngdoc overview
 * @name relaxCoachApp
 * @description
 * # relaxCoachApp
 *
 * Main module of the application.
 */
angular
  .module('relaxCoachApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'wijmo',
    'ui.knob',
    'timer'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html',
        controller: 'MainCtrl'
      })
      .when('/prefeedback', {
        templateUrl: 'views/prefeedback.html',
        controller: 'MainCtrl'
      })
      .when('/postfeedback', {
        templateUrl: 'views/postfeedback.html',
        controller: 'MainCtrl'
      })
      .when('/measurement', {
        templateUrl: 'views/measurement.html',
        controller: 'MainCtrl'
      })
      .when('/input-before', {
        templateUrl: 'views/inputBefore.html',
        controller: 'MainCtrl'
      })
      .when('/input-after', {
        templateUrl: 'views/inputAfter.html',
        controller: 'MainCtrl'
      })
      .when('/training', {
        templateUrl: 'views/training.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
