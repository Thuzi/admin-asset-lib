
angular.module("tzMultiSelect", ['tzMultiSelect.input']);

angular.module('tzMultiSelect.input', [])
    .directive('tzMultiSelectInput', ['$location', function($location) {
    return {
        restrict: 'AE',
        templateUrl: '/bower_components/admin-asset-lib/directives/multi-select.html',
        controller: ['$scope', '$location', function ($scope, $location) {

            $scope.selectedItems = [];

            $scope.keydown = function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    $scope.addToList(e.target.value);
                    e.target.value = '';
                };
            };

            $scope.addToList = function (value) {
                var brand = $scope.list.items.find(function (item) { return item.name === value });
                var alreadySelected = $scope.selectedItems.find(function (item) { return item.name === value });

                if (brand && !alreadySelected) {
                    $scope.selectedItems.push(item);
                }
            };

            $scope.removeItem = function (index) {
                $scope.selectedItems.splice(index, 1);
            };

            $scope.selectedItems.forEach(function (item) {
                $scope.addToList(item.name);
            });

        }],
        scope: {
            list: '=list',
            selectedItems: '=model'
        }
    };
}]);
