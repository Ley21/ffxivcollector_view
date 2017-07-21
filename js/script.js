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
    ffxivcollectorApp.controller('mainController', ['$translate', '$scope', '$http',
        function ($translate, $scope,$http) {
      $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
      };
      $http.get('http://ffxivcollector-api-ley21.c9users.io/public/minion/latest').
        then(function(response) {
            $scope.minions = response.data;
        });
    $http.get('http://ffxivcollector-api-ley21.c9users.io/public/mount/latest').
        then(function(response) {
            $scope.mounts = response.data;
        });
    }]);
    
ffxivcollectorApp.config(function ($translateProvider)   { 
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.usePostCompiling(true);
    $translateProvider.useStaticFilesLoader({
            files: [{
        prefix: 'lang/app-',
        suffix: '.json'
    }, {
        prefix: 'lang/minion-',
        suffix: '.json'
    },{
        prefix: 'lang/mount-',
        suffix: '.json'
    } ]});
    
    $translateProvider.preferredLanguage('de');
    $translateProvider.forceAsyncReload(true);
  });
  