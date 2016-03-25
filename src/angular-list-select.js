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
                    selectedItems: '=',
                    itemId: '='
                },
                link: linkFunc,
                template: '<div class="ls-container">' +
                    '<div class="ls-items">' +
                    '<div class="ls-item" ng-repeat="item in dirItems" ng-click="itemClick(item)">{{item.name}}</div>' +
                    '</div>' +
                    '<div class="ls-selected-items">' +
                    '<div class="ls-selected-item" ng-repeat="item in selectedItems" ng-click="selItemClick(item)">{{item.name}}</div>' +
                    '</div>' +
                    '</div>'
            }

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                // List of item identifiers for both lists
                var itemIds = [];
                var selectedItemIds = [];
                // Object dirItems presents directive items, so original ones can be unchanged after different selection
                scope.dirItems = scope.items.map(function(item) {
                    return angular.copy(item);
                });

                // Rebuild item and selected item's ids
                var rebuildIds = function() {
                    itemIds = [];
                    selectedItemIds = [];
                    scope.dirItems.forEach(function(item) {
                        itemIds.push(scope.itemId(item));
                    });
                    scope.selectedItems.forEach(function(item) {
                        selectedItemIds.push(scope.itemId(item));
                    });
                }

                // Initial id rebuilding
                rebuildIds();

                scope.itemClick = function(item) {
                    var itemId = scope.itemId(item);
                    var i = itemIds.indexOf(itemId);
                    selectedItemIds.push(itemId);
                    scope.selectedItems.push(item);
                    itemIds.splice(i, 1);
                    scope.dirItems.splice(i, 1);
                };
                scope.selItemClick = function(item) {
                    var itemId = scope.itemId(item);
                    var i = selectedItemIds.indexOf(itemId);
                    itemIds.push(itemId);
                    scope.dirItems.push(item);
                    selectedItemIds.splice(i, 1);
                    scope.selectedItems.splice(i, 1);
                };
            }
        });
})();