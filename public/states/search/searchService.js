angular.module('Cnote')
  .service('searchServe', ['$http', function($http) {


    this.getResults = function(srchTerm) {
        if (!srchTerm) {
          console.log("Awaiting defined search term");
        } else {
          console.log("SearchTerm is: ", srchTerm);
        }

        return $http({
            method: 'get',
            url: '/api/mobileSearchResults/' + srchTerm
          })
          .then(function(response) {
            if (response.status === 200) {
              console.log("RESPONSE FROM SEARCHSERVE'S .THEN: ", response);
              return response.data;
            }
            return "error!";
          })
      }
      // this.getResults(); //BUG: Getting results without this! XXX

  }]);
