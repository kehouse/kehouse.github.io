var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('portfolioApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: "./portfolioApp/templates/home.html",
        // controller: "HomeController"
      })
  })
