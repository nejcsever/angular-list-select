/*! 
 * angular-list-select
 * https://github.com/nejcsever/angular-list-select
 * Copyright (c) 2016 Nejc Sever
 * License: MIT
 */
(function() {
    angular.module('angular-list-select', [])
        .directive('listSelect', function() {
            var directive = {
                restrict: 'EA',
                replace: true,
                scope: {
                    items: '=',
                    selectedItems: '='
                },
                link: linkFunc,
                template: '<div class="ls-container">' +
                    '<div class="ls-items">' +
                    '<div class="ls-item" ng-repeat="item in items" ng-click="itemClick(item)">{{item.name}}</div>' +
                    '</div>' +
                    '<div class="ls-selected-items">' +
                    '<div class="ls-selected-item" ng-repeat="item in selectedItems" ng-click="selItemClick(item)">{{item.name}}</div>' +
                    '</div>' +
                    '</div>'
            }

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                scope.itemClick = function(item) {
                    console.log(item);
                };
                scope.selItemClick = function(item) {
                    console.log(item);
                };
            }
        });
})();