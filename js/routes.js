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

  .state('matchDay', {
    url: '/page7',
    templateUrl: 'templates/matchDay.html',
    controller: 'matchDayCtrl'
  })

  .state('fixtures', {
    url: '/page8',
    templateUrl: 'templates/fixtures.html',
    controller: 'fixturesCtrl'
  })

  .state('results', {
    url: '/page32',
    templateUrl: 'templates/results.html',
    controller: 'resultsCtrl'
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

  .state('ricky', {
    url: '/page12',
    templateUrl: 'templates/ricky.html',
    controller: 'rickyCtrl'
  })

  .state('boney', {
    url: '/page13',
    templateUrl: 'templates/boney.html',
    controller: 'boneyCtrl'
  })

  .state('ameen', {
    url: '/page14',
    templateUrl: 'templates/ameen.html',
    controller: 'ameenCtrl'
  })

  .state('aneesh', {
    url: '/page15',
    templateUrl: 'templates/aneesh.html',
    controller: 'aneeshCtrl'
  })

  .state('ankit', {
    url: '/page16',
    templateUrl: 'templates/ankit.html',
    controller: 'ankitCtrl'
  })

  .state('arjunRono', {
    url: '/page17',
    templateUrl: 'templates/arjunRono.html',
    controller: 'arjunRonoCtrl'
  })

  .state('asif', {
    url: '/page18',
    templateUrl: 'templates/asif.html',
    controller: 'asifCtrl'
  })

  .state('aslam', {
    url: '/page19',
    templateUrl: 'templates/aslam.html',
    controller: 'aslamCtrl'
  })

  .state('bhavesh', {
    url: '/page20',
    templateUrl: 'templates/bhavesh.html',
    controller: 'bhaveshCtrl'
  })

  .state('harish', {
    url: '/page21',
    templateUrl: 'templates/harish.html',
    controller: 'harishCtrl'
  })

  .state('harsha', {
    url: '/page22',
    templateUrl: 'templates/harsha.html',
    controller: 'harshaCtrl'
  })

  .state('jasir', {
    url: '/page23',
    templateUrl: 'templates/jasir.html',
    controller: 'jasirCtrl'
  })

  .state('kiran', {
    url: '/page24',
    templateUrl: 'templates/kiran.html',
    controller: 'kiranCtrl'
  })

  .state('kiranNair', {
    url: '/page25',
    templateUrl: 'templates/kiranNair.html',
    controller: 'kiranNairCtrl'
  })

  .state('koko', {
    url: '/page26',
    templateUrl: 'templates/koko.html',
    controller: 'kokoCtrl'
  })

  .state('lukku', {
    url: '/page27',
    templateUrl: 'templates/lukku.html',
    controller: 'lukkuCtrl'
  })

  .state('mtukushi', {
    url: '/page28',
    templateUrl: 'templates/mtukushi.html',
    controller: 'mtukushiCtrl'
  })

  .state('muneeb', {
    url: '/page29',
    templateUrl: 'templates/muneeb.html',
    controller: 'muneebCtrl'
  })

  .state('ramdas', {
    url: '/page30',
    templateUrl: 'templates/ramdas.html',
    controller: 'ramdasCtrl'
  })

  .state('raviraj', {
    url: '/page31',
    templateUrl: 'templates/raviraj.html',
    controller: 'ravirajCtrl'
  })

  .state('saket', {
    url: '/page33',
    templateUrl: 'templates/saket.html',
    controller: 'saketCtrl'
  })

  .state('sathyajith', {
    url: '/page34',
    templateUrl: 'templates/sathyajith.html',
    controller: 'sathyajithCtrl'
  })

  .state('saurav', {
    url: '/page35',
    templateUrl: 'templates/saurav.html',
    controller: 'sauravCtrl'
  })

  .state('sreenath', {
    url: '/page36',
    templateUrl: 'templates/sreenath.html',
    controller: 'sreenathCtrl'
  })

  .state('suraj', {
    url: '/page37',
    templateUrl: 'templates/suraj.html',
    controller: 'surajCtrl'
  })

  .state('sushmit', {
    url: '/page39',
    templateUrl: 'templates/sushmit.html',
    controller: 'sushmitCtrl'
  })

  .state('vinod', {
    url: '/page40',
    templateUrl: 'templates/vinod.html',
    controller: 'vinodCtrl'
  })

  .state('vysakhRaj', {
    url: '/page38',
    templateUrl: 'templates/vysakhRaj.html',
    controller: 'vysakhRajCtrl'
  })

  .state('wFSL', {
    url: '/page41',
    templateUrl: 'templates/wFSL.html',
    controller: 'wFSLCtrl'
  })

  .state('wPL', {
    url: '/page42',
    templateUrl: 'templates/wPL.html',
    controller: 'wPLCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});