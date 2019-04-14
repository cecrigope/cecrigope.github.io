var app = angular.module('cecrigope', ['matchMedia']);
app.controller('ctrl', function($scope, $interval, screenSize) {

  $scope.isScreenSize = screenSize.is;
  // $scope.descriptions = ['web applications', 'VR experiences', 'chatbots', 'solutions'];
  // $scope.description = $scope.descriptions[0];
  // var seconds = 0;
  // $interval(function() {
  //   seconds++;
  //   console.log("SECONDS LEFT: " + seconds);
  //   if (seconds = 0) {
  //     $scope.description = $scope.descriptions[0];
  //   } else if (seconds = 1) {
  //     $scope.description = $scope.descriptions[1];
  //   } else if (seconds = 2) {
  //     $scope.description = $scope.descriptions[2];
  //   } else {
  //     $scope.description = $scope.descriptions[3];
  //   }
  // }, 1000);
});
