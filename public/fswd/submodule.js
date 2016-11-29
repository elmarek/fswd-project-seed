var angular = require('angular');

angular.module('fswd.submodule', [require('angular-route/index')])
  .config(function($routeProvider) {
    console.log($routeProvider);
    console.log('I am in a submodule!');
  });

module.exports = angular.module('fswd.submodule');
