var $ = require("jquery")

window.$ = $;
window.jQuery = $;

var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('portfolio',[
    'ngRoute',
    'portfolioApp'
  ])

  require('./portfolioApp');
