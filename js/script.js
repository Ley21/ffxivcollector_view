// script.js

    // create the module and name it ffxivcollectorApp
    var ffxivcollectorApp = angular.module('ffxivcollectorApp', ['ngRoute','ui.bootstrap','pascalprecht.translate']);


    ffxivcollectorApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            
              
    });
    // create the controller and inject Angular's $scope
    ffxivcollectorApp.controller('mainController', function($scope,$http) {
        $http.get('http://ffxivcollector-api-ley21.c9users.io/public/minion/latest').
            then(function(response) {
                $scope.minions = response.data;
            });
        // create a message to display in our view
        
    });
ffxivcollectorApp.config(function ($translateProvider)   { 
    $translateProvider.preferredLanguage('de');
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
        prefix: 'lang-',
        suffix: '.json'
    });
    //$translateProvider.useUrlLoader('http://ffxivcollector-api-ley21.c9users.io/public/lang/mount');
    //$translateProvider.useUrlLoader('http://ffxivcollector-api-ley21.c9users.io/public/lang/minion');
    
  });
