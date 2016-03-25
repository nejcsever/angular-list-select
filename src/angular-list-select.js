/*! 
 * angular-list-select
 * https://github.com/nejcsever/angular-list-select
 * Copyright (c) 2016 Nejc Sever
 * License: MIT
 */
(function() {
    angular.module('angular-list-select', [])
        .directive('listSelect', function() {
            return {
                restrict: 'AE',
                replace: true,
                scope: {
                    items: '=',
                    selectedItems: '='
                },
                template: '<div class="ls-container">' +
                    '<div class="ls-items">' +
                    '<div class="item" ng-repeat="item in items">{{item}}</div>' +
                    '</div>' +
                    '<div class="ls-selected-items">' +
                    '<div class="item" ng-repeat="item in selectedItems">{{item}}</div>' +
                    '</div>' +
                    '</div>'
            }
        });
})();