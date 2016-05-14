myApp.controller('SuggestionController', [
	'$scope',
	'$routeParams', 
	'suggestions', 

	function($scope, $routeParams, suggestions) {
		$scope.post = suggestions.posts[$routeParams.id];

		$scope.addComment = function() {
			$scope.post.comments.push( {
				body: $scope.body,
				upvotes: 0,
			});
			console.log($scope.post);
		}

		$scope.upvote = function(comment) {
			comment.upvotes += 1;
		}

	}
]);