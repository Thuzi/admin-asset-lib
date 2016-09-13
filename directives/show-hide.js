
angular.module("tzShowHide", ['tzShowHide.input']);

angular.module('tzShowHide.input', [])
    .directive('tzShowHideInput', ['$location', function($location) {
    return {
        restrict: 'AE',
        templateUrl: '/bower_components/admin-asset-lib/directives/show-hide-input.html',
        controller: ['$scope',
        function ($scope) {

            $scope.hide = true;

            $scope.showHideSecret = function (type) {
                if ($scope.hide == true) {
                    $scope.hide = false;
                } else {
                    $scope.hide = true;
                }
            };

        }],
        scope: {
            secret: '=?secret',
            name: '@name',
            required: '@required'
        }
    };
}]);
