angular.module('Cnote')
  .controller('youtubeCtrl', function($scope, $state, readerServ, youtubeEmbedUtils) {

    // 'VvTvtIeXJ1I'
    console.log(youtubeEmbedUtils.getIdFromURL('https://www.youtube.com/watch?v=VvTvtIeXJ1I'));
  });


// BUG: readerServ is firing twice. LOG @ line 14 is firing twice

// XXX: MAYBE searchCtrl is firing it & readerCtrl is also firing it
