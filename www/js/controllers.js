angular.module('app.controllers', [])

.controller('recentlyAddedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.recentlyAdded = [
    { name: 'Jim', locationMet: 'Soho'},
    { name: 'Bob', locationMet: 'Michael'},
    { name: 'Sue', locationMet: 'Soho'}
  ];

}])

.controller('michaelCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
