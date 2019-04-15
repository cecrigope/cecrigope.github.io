var app = angular.module('cecrigope', ['matchMedia']);
app.controller('ctrl', function($scope, $interval, screenSize) {

  $scope.isScreenSize = screenSize.is;
  $scope.descriptions = ['web applications', 'VR experiences', 'chatbots', 'solutions'];
  $scope.description = $scope.descriptions[0];
  var seconds = 0;

  if (seconds <= 4) {
    $interval(function() {
      console.log(seconds);
      seconds = seconds + 1;
      if (seconds == 0) {
        $scope.description = $scope.descriptions[0];
      } else if (seconds == 1) {
        $scope.description = $scope.descriptions[1];
      } else if (seconds == 2) {
        $scope.description = $scope.descriptions[2];
      } else {
        $scope.description = $scope.descriptions[3];
      }
    }, 1000);
  }
});
