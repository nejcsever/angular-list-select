angular.module('demo-app', ['angular-list-select'])
    .controller('MainController', ['$scope', function($scope) {
        $scope.people = [{
            id: 0,
            name: "Nejc",
            surname: "Sever"
        }, {
            id: 1,
            name: "Brandon",
            surname: "Faircloth"
        }, {
            id: 2,
            name: "Neil",
            surname: "Donoghue"
        }, {
            id: 3,
            name: "Aaron",
            surname: "Gwin"
        }, {
            id: 4,
            name: "Peter",
            surname: "Prevc"
        }, {
            id: 5,
            name: "Tina",
            surname: "Maze"
        }, {
            id: 6,
            name: "Loic",
            surname: "Bruni"
        }];
        $scope.selectedPeople = [];
        $scope.personId = function(person) {
            return person.id;
        };
    }]);