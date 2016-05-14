myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/single', {
		templateUrl: 'views/single.html',
		controller: 'SuggestionController'
	});
});