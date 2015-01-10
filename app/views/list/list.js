
angular.module('App')
.controller('ListCtrl', function($scope,CountryInfo) {
    CountryInfo.countriesData().success(function (result) {
        $scope.result = result.geonames;
    })
});

