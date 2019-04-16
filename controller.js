var app = angular.module('cecrigope', ['matchMedia']);
app.controller('ctrl', function($scope, $interval, screenSize) {

  $scope.isScreenSize = screenSize.is;
});
