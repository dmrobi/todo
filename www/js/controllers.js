angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope) {
  $scope.todos = [
    { id: 1, title: 'Analysis', taskDetails:'Need to do deep analysis with the required application.', active:1},
    { id: 2, title: 'Database Design', taskDetails:'Creating Table and Field asper data analysis.', active:1},
    { id: 3, title: 'UI Design', taskDetails:'Design Form and other fornted materials for application.', active:1},
    { id: 4, title: 'Testing', taskDetails:'Test the application to fix all bug and ensure the quality.', active:1},
    { id: 5, title: 'Deployment', taskDetails:'Launch Appllication to the target platform.', active:1},
    { id: 6, title: 'Marketing', taskDetails:'Promote application to the target market to get good returns.', active:1}
  ];
})

.controller('TaskdetailsCtrl', function($scope, $stateParams) {
    
});
