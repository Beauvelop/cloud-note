angular.module('Cnote', ['ui.router', 'youtube-embed'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/home') //this is four redirection to 'home'
      // $urlRouterProvider.otherwise('/home')
      //if user goes to invalid route.. you get redirected to another page

    $stateProvider
      .state('home', {
        controller: 'homeCtrl',
        url: '/home',
        templateUrl: './states/home/home.html'
      })
      .state('compose', {
        controller: 'composeCtrl',
        url: '/compose',
        templateUrl: './states/compose/compose.html'
      })
      .state('reader', {
        controller: 'readerCtrl',
        url: '/reader/:id', //NB:parameter
        templateUrl: './states/reader/reader.html'
      })
      .state('search', {
        // controller: 'readerCtrl',
        url: '/search/:id', //NB:parameter
        templateUrl: './states/search/search.html'
      })
      .state('login', {
        // controller: 'readerCtrl',
        url: '/login/', //NB:parameter
        templateUrl: './states/login/login.html'
      })
  });
/*
add /:id --
This will take a parameter in the reader state and store that parameter in the value 'id'

Then, go to that state's controller and set
$scope.test = $stateparams.id;
*/
