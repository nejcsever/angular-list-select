# Angular list select

Directive is in early stage of development...

Angular list select is an angular directive that allows you to select multiple items from a list of items. For now you can filter items via text input and create a custom template for each item and style it as you wish.

You can try it in [DEMO](https://embed.plnkr.co/nAJkOF4nwcVusdBAKCOR/)

### Directive attributes
`items` - list of items to be used in list select

`selected-items` - list in which selected items will be stored

`item-id` - function that return unique string identifier of **item** given as parameter

`item-template` - url of template to be used to display an **item**

`search` (optional) - string of class values that are apended to filter input control. If attribute is empty, filter input control is hidden

### [Demo](https://embed.plnkr.co/nAJkOF4nwcVusdBAKCOR/) explanation
```html
<list-select items="people" selected-items="selectedPeople" item-id="personId" item-template="itemTemplate.html" search="search-input"></list-select>
```

Directive defined in example above is going to make a list of items from scope variable `people`. All selected items are going to be stored in scope variable `selectedPeople`. Item is identified via `personId` function and template to display an item is in `itemTemplate.html`. `search-input` is a class name that is injected as a class attribute to search input text.

**script.js:**
```javascript
angular.module('demo-app', ['angular-list-select'])
    .controller('MainController', ['$scope', function($scope) {
        $scope.people = [{
            id: 0,
            name: "Nejc",
            surname: "Sever"
        }];
        $scope.selectedPeople = [];
        $scope.personId = function(person) {
            return person.id;
        };
    }]);
```
**itemTemplate.html:**
```html
<div>
    <div>{{item.name}}</div>
    <div>{{item.surname}}</div>
</div>
```
