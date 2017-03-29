angular.module('Cnote')
  .controller('composeCtrl', function($scope, noteService) {
    $scope.isFav = function() {
      $scope.compose.favorite = true;
    }

    $scope.submitForm = function(compose) {
      console.log("This object is sent to back-end from 'submitForm()': ", compose)
      noteService.sendMobileForm(compose)
    }



  })
