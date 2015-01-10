
angular.module('App')
    .controller('DetailCtrl', function($scope, CountryInfo){
        CountryInfo.countryData()
            .success(function(data){
                    $scope.result = data.geonames;
                })
        CountryInfo.capitalData()
            .success(function(data){
                    $scope.capResult = data.geonames;
                })
        CountryInfo.neighborsData()
            .success(function(data){
                    $scope.neighborResult = data.geonames;
                })
        $scope.quantity = 3;
    })