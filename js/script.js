// script.js

    // create the module and name it ffxivcollectorApp
    var ffxivcollectorApp = angular.module('ffxivcollectorApp', ['ngRoute','pascalprecht.translate']);


    ffxivcollectorApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            
              
    });
    // create the controller and inject Angular's $scope
    ffxivcollectorApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
    
ffxivcollectorApp.config(function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'lang-',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage('de_DE');
});
