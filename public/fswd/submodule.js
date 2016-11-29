var angular = require('angular');

angular.module('fswd.submodule', [require('angular-route/index')])
  .run(function($log) {
    $log.info('I am in a submodule!');
  });

module.exports = angular.module('fswd.submodule');
