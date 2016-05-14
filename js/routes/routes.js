myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/suggestion/:id', {
		templateUrl: 'views/suggestion.html',
		controller: 'SuggestionController'
	});
});