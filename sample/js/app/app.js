
'use strict';

var App = angular.module('App',
    ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMessages', 'tzDateTime']);

App.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider

            .when('/', {
                templateUrl: '../../templates/about.html'
            })

            .when('/colors', {
                templateUrl: '../../templates/colors.html'
            })

            .when('/buttons', {
                templateUrl: '../../templates/buttons.html'
            })

            .when('/inputs', {
                templateUrl: '../../templates/inputs.html'
            })

            .when('/tabs', {
                templateUrl: '../../templates/tabs.html'
            })

            .when('/nestedtabs', {
                templateUrl: '../../templates/nested-tabs.html'
            })

            .when('/list-single', {
                templateUrl: '../../templates/list-single-col.html'
            })

            .when('/list-multi', {
                templateUrl: '../../templates/list-multi-col.html'
            })

            .when('/table', {
                templateUrl: '../../templates/table.html'
            })

        ;

    }
]);

App.run(function($rootScope, $location) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        $rootScope.activeNav = $location.url();
    });
});

App.controller('MainCtrl',
    ['$scope', '$uibModal', '$location',
    function ($scope, $uibModal, $location) {


        $scope.fakeInputItems = {
            textRequired: 'Hello'
        };

        $scope.openModal = function (size) {

            var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: '../../templates/modals/confirm.html',
              controller: 'ModalInstanceCtrl'
            });

            modalInstance.result.then(function () {
                console.log('ok');
            });
        };

    }
]);


App.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
