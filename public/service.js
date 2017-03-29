angular.module('Cnote')
  .service('noteService', ['$http', function($http) {
    this.getNotes = function(variable) {
      return $http({
          method: 'get',
          url: '/api/getMobileNote'
        })
        // .then(response => {
        //   return response.data;
        // });
        .then(function(response) {
          if (response.status === 200) {
            return response.data;
          }
          return "error!";
        })
    }
    this.getNotes();

    this.sendMobileForm = function(form) {
      console.log("IN sendMobileForm FUNk");
      return $http({
        method: 'POST',
        url: '/api/addMobileNote',
        data: form
      })
    }
    this.sendMobilelinks = function(form) {
      console.log("IN sendMobilelinks FUNk");
      return $http({
        method: 'POST',
        url: '/api/addMobileVidlink',
        data: form
      })
    }
    this.sendMobiletags = function(form) {
      console.log("IN sendMobiletags FUNk");
      return $http({
        method: 'POST',
        url: '/api/addMobileTags',
        data: form
      })
    }
  }]);
