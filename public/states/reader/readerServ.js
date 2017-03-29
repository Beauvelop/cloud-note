angular.module('Cnote')
  .service('readerServ', function($http) {

    //pass in that id param.

    this.getSingleNote = function(id) {
        console.log(" in readerServ", id);
        // debugger;
        // if (!id) {
        //   response.data[0].title = "Please Search for Note!"
        //   return response.data[0];
        // } else {
        return $http({
            method: 'get',
            url: '/api/getSingleNote/' + id
          })
          .then(function(response) {
            if (response.status === 200) {
              console.log('serv res', response)
              return response.data[0];
            }
            return "error!";
          })
      }
      // }
      // this.getSingleNote();

  })
