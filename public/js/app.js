angular.module('twinCoApp', [
	'ui.router', 
	//'ui.bootstrap'
	//'MainCtrl', 
	//'AboutCtrl', 
	//'NerdService', 
	//'ContactCtrl', 
	//'GeekService'
])
.config(function($stateProvider){

 var appViews = ['about', 'contact', 'gallery'];
  appViews.forEach(function(stateName) {
    $stateProvider.state(stateName, {
      url: '/' + stateName.toLowerCase(),
      templateUrl: '/js/controllers/' + stateName + '/' + stateName + '.html',
      controller: stateName + 'Ctrl',
    })
  });
});