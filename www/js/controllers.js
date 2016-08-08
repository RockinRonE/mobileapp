angular.module('app.controllers', ['LocalStorageModule'])

.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('names');
})

.controller('recentlyAddedCtrl', ['$scope', '$stateParams', '$ionicModal'  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName


function ($scope, $stateParams, $ionicModal) {

  $scope.recentlyAdded = [
    { name: 'Jim', locationMet: 'Soho'},
    { name: 'Bob', locationMet: 'Michael'},
    { name: 'Sue', locationMet: 'Soho'}
  ];

// configure ionic modal before use
$ionicModal.fromTemplateUrl('new-connection-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(
    (modal) => {
      $scope.newTaskModal = modal;
    }
  );

}])

.controller('michaelCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
