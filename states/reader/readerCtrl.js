angular.module('Cnote')
  .controller('readerCtrl', function($scope, $stateParams) {
    $scope.test = $stateParams.id;
    $scope.msg =
      "Hi from the readerCtrl! 😘 This is so much fun that I wish it would last forever. Geeze. I wish I could code all night and all day!";

  })
