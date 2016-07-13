
angular.module("tzDateTime", ['tzdateTime.zonePicker']);

angular.module('tzdateTime.zonePicker', [])
    .directive('dateTimeZonePicker', ['$location', function($location) {
    return {
        restrict: 'AE',
        templateUrl: '/bower_components/admin-asset-lib/directives/date-time-zone-picker.html',
        controller: ['$scope', function ($scope) {

            $scope.dateTimeZone = '';

            $scope.model = $scope.model || moment();
            $scope.model.second(00);

            $scope.date = '';
            $scope.time = '';
            $scope.zone = '';

            $scope.zones = [
                { label: 'UTC - Coordinated Universal Time (+0:00)', value: '+00:00' },
                { label: 'EDT - Eastern Daylight (-4:00)', value: '-04:00' },
                { label: 'EST/CDT - Eastern Standard/Central Daylight (-5:00)', value: '-05:00' },
                { label: 'CST/MDT - Central Standard/Mountain Daylight (-6:00)', value: '-06:00' },
                { label: 'MST/PDT - Mountain Standard/Pacific Daylight (-7:00)', value: '-07:00' },
                { label: 'PST - Pacific Standard (-8:00)', value: '-08:00' }
            ];

            $scope.showDatePicker = false;
            $scope.showTimePicker = false;
            $scope.showZonePicker = false;

            $scope.$watch('model', function (newVal, oldVal) {
                if (newVal) {
                    $scope.displayValue();
                }
            });

            $scope.$watch('date', function (newVal, oldVal) {
                if (newVal) {
                    $scope.model.date(newVal.getDate());
                    $scope.model.month(newVal.getMonth());
                    $scope.model.year(newVal.getFullYear());
                    $scope.showDatePicker = false;
                    $scope.displayValue();
                }
            });

            $scope.$watch('time', function (newVal, oldVal) {
                if (newVal) {
                    $scope.model.hour(newVal.getHours());
                    $scope.model.minute(newVal.getMinutes());
                    $scope.displayValue();
                }
            });

            $scope.selectZone = function (zone, index) {
                var hour = $scope.model.hour(),
                    min = $scope.model.minute(),
                    day = $scope.model.day();

                $scope.selectedZone = index;

                $scope.model.utcOffset(zone);
                $scope.model.hour(hour);
                $scope.model.day(day);
                $scope.showZonePicker = false;
                $scope.displayValue();
            }

            $scope.displayValue = function () {
                $scope.dateTimeZone = $scope.model.format('M/D/YYYY @ h:mm A Z');
            }

            $scope.toggleDatePicker = function () {
                $scope.showDatePicker = !$scope.showDatePicker;
                $scope.showTimePicker = false;
                $scope.showZonePicker = false;
            }

            $scope.toggleTimePicker = function () {
                $scope.showTimePicker = !$scope.showTimePicker;
                $scope.showDatePicker = false;
                $scope.showZonePicker = false;
            }

            $scope.toggleZonePicker = function () {
                $scope.showZonePicker = !$scope.showZonePicker;
                $scope.showDatePicker = false;
                $scope.showTimePicker = false;
            }

            $scope.displayValue();
        }],
        scope: {
            model: '=model',
            minDate: '=minDate'
        }
    };
}]);
