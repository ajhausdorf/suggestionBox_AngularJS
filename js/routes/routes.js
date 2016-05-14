myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})
	.when('/single', {
		templateUrl: 'views/single.html',
		controller: 'homeController'
	});
});