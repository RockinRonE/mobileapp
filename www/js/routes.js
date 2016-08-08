angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('connections.recentlyAdded', {
    url: '/recent',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recentlyAdded.html',
        controller: 'recentlyAddedCtrl'
      }
    }
  })

  .state('connections.michael', {
    url: '/michael',
    views: {
      'side-menu21': {
        templateUrl: 'templates/michael.html',
        controller: 'michaelCtrl'
      }
    }
  })

  .state('connections', {
    url: '/connections',
    templateUrl: 'templates/connections.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/connections/recent')

  

});