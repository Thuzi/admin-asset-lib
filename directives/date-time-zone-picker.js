
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

            $scope.zones = [
                { label: 'UTC - Coordinated Universal Time (+0:00)', value: '+00:00' },
                { label: 'AEDT - Australian Eastern Daylight Time (+11:00)', value: '+11:00'},
                { label: 'AEST - Australian Eastern Standard Time (+10:00)', value: '+10:00'},
                { label: 'KST - Korea Standard Time (+09:00)', value: '+09:00'},
                { label: 'JST - Japan Standard Time (+09:00)', value: '+09:00'},
                { label: 'CST - China Standard Time (+08:00)', value: '+08:00'},
                { label: 'MYT - Malaysia Time (+08:00)', value: '+08:00'},
                { label: 'WIB - Western Indonesian Time (+07:00)', value: '+07:00'},
                { label: 'ICT - Indochina Time (+07:00)', value: '+07:00'},
                { label: 'IST - India Standard Time (+05:30)', value: '+05:30'},
                { label: 'GST - Gulf Standard Time (+04:00)', value: '+04:00'},
                { label: 'MSK - Moscow Standard Time (+03:00)', value: '+03:00'},
                { label: 'SAST - South Africa Standard Time (+02:00)', value: '+02:00'},
                { label: 'EET - Eastern European Time (+02:00)', value: '+02:00'},
                { label: 'UTC - Coordinated Universal Time (+00:00)', value: '+00:00'},
                { label: 'BRT - Brasilia Time (-03:00)', value: '-03:00'},
                { label: 'ART - Argentina Time (-03:00)', value: '-03:00'},
                { label: 'EDT - Eastern Daylight Time (-04:00)', value: '-04:00'},
                { label: 'EST - Eastern Standard Time (-05:00)', value: '-05:00'},
                { label: 'CDT - Central Daylight Time (-05:00)', value: '-05:00'},
                { label: 'COT - Columbia Time (-05:00)', value: '-05:00'},
                { label: 'PET - Peru Time (-05:00)', value: '-05:00'},
                { label: 'MDT - Mountain Daylight Time (-06:00)', value: '-06:00'},
                { label: 'CST - Central Standard Time (-06:00)', value: '-06:00'},
                { label: 'PDT - Pacific Daylight Time (-07:00)', value: '-07:00'},
                { label: 'MST - Mountain Standard Time (-07:00)', value: '-07:00'},
                { label: 'PST - Pacific Standard Time (-08:00)', value: '-08:00'}
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

                console.log(zone)

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

            $scope.selectZone($scope.zone);
            //$scope.displayValue();
        }],
        scope: {
            model: '=model',
            zone: '=zone',
            minDate: '=minDate'
        }
    };
}]);
