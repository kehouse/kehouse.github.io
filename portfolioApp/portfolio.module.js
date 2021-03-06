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
      .when('/about', {
        templateUrl: "./portfolioApp/templates/about.html",
        controller: "AboutController"
      })
      .when('/work', {
        templateUrl: "./portfolioApp/templates/work.html",
        // controller: "HomeController"
      })
      .when('/resume', {
        templateUrl: "./portfolioApp/templates/resume.html",
        // controller: "HomeController"
      })
      .when('/contact', {
        templateUrl: "./portfolioApp/templates/contact.html",
        // controller: "HomeController"
      })
  })
