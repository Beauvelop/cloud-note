angular.module('Cnote')
  .controller('searchCtrl', function($scope, searchServe) {

    $scope.getResults = function(srchTerm) {

      searchServe.getResults(srchTerm).then(function(response) {
        console.table("searchCtrl's .then yields", response)

        $scope.response = response;
        return $scope.response;
      });

    }
  })
