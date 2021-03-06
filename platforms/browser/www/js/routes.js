angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.salaI', {
    url: '/sala1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salaI.html',
        controller: 'salaICtrl'
      }
    }
  })

  .state('menu.laboratRioI', {
    url: '/lab1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/laboratRioI.html',
        controller: 'laboratRioICtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('digitoAutenticaO', {
    url: '/autenticacao',
    templateUrl: 'templates/digitoAutenticaO.html',
    controller: 'digitoAutenticaOCtrl'
  })

$urlRouterProvider.otherwise('/autenticacao')


});