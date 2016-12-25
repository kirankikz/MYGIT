angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('home', {
    url: '/page5',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('news', {
    url: '/page6',
    templateUrl: 'templates/news.html',
    controller: 'newsCtrl'
  })

  .state('matchDay', {
    url: '/page7',
    templateUrl: 'templates/matchDay.html',
    controller: 'matchDayCtrl'
  })

  .state('fixturesResults', {
    url: '/page8',
    templateUrl: 'templates/fixturesResults.html',
    controller: 'fixturesResultsCtrl'
  })

  .state('players', {
    url: '/page9',
    templateUrl: 'templates/players.html',
    controller: 'playersCtrl'
  })

  .state('competitions', {
    url: '/page10',
    templateUrl: 'templates/competitions.html',
    controller: 'competitionsCtrl'
  })

  .state('about', {
    url: '/page11',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('page', {
    url: '/page12',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page13',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page14',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/page15',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page16',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/page17',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page18',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page8', {
    url: '/page19',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page9', {
    url: '/page20',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page10', {
    url: '/page21',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/page22',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/page23',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page13', {
    url: '/page24',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page14', {
    url: '/page25',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page15', {
    url: '/page26',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page16', {
    url: '/page27',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('page17', {
    url: '/page28',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('page18', {
    url: '/page29',
    templateUrl: 'templates/page18.html',
    controller: 'page18Ctrl'
  })

  .state('page19', {
    url: '/page30',
    templateUrl: 'templates/page19.html',
    controller: 'page19Ctrl'
  })

  .state('page20', {
    url: '/page31',
    templateUrl: 'templates/page20.html',
    controller: 'page20Ctrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});