angular.module('demo-app', ['angular-list-select'])
.controller('MainController', ['$scope', function($scope) {
	$scope.people = [{
		name: "Nejc",
		surname: "Sever"
	}, {
		name: "Brandon",
		surname: "Faircloth"
	}];
}]);