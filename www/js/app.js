/**
 * Created by gkopevski on 11/10/14.
 */
'use strict';

var firstPage = "home";
var Java2days = angular.module('Java2days', ['ui.router']);

Java2days.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        });

}]);