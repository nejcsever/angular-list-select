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
            name: "Nejc",
            surname: "Sever"
        }, {
            id: 5,
            name: "Brandon",
            surname: "Faircloth"
        }, {
            id: 6,
            name: "Neil",
            surname: "Donoghue"
        }, {
            id: 7,
            name: "Aaron",
            surname: "Gwin"
        }];
        $scope.selectedPeople = [];
        $scope.personId = function(person) {
            return person.id;
        };
    }]);