angular.module('Cnote')
  .controller('readerCtrl', function($scope, $state, readerServ, youtubeEmbedUtils, $sce) {

    readerServ.getSingleNote($state.params.id)
      .then(function(response) {
        $scope.response = response;
        $scope.vidUrl = $scope.response.vidlink;
        $scope.vidID = youtubeEmbedUtils.getIdFromURL(
          response.vidlink);
        console.log("RESPONSE: ", $scope.response);
        console.log("SCOPE.VIDURL: ", $scope.vidUrl);
        console.log("SCOPE.VIDID: ", $scope.vidID);
        $scope.trustedVid = $sce.trustAsResourceUrl($scope.vidUrl);
      })

  })



// BUG: readerServ is firing twice. LOG @ line 14 is firing twice

// XXX: MAYBE searchCtrl is firing it & readerCtrl is also firing it
