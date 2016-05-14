myApp.controller('homeController', [
	'$scope', 
	'suggestions',
	'$routeParams', 

	function($scope, $routeParams, suggestions) {
		$scope.posts = suggestions.posts;
		$scope.addSuggestion = function() {
			// Don't allow blank submissions 
			if(!$scope.title || $scope.title === "" ) {
				return;
			}

			$scope.posts.push( {
				title: $scope.title,
				upvotes: 0,
			});

			//clear input after submit
			$scope.title = '';
		};
		$scope.upvote = function(post) {
			post.upvotes += 1;
		};
	}
]);