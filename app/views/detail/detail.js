/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .controller('DetailCtrl', function($scope, CountryInfo){
        debugger
        CountryInfo.countryData()
            .success(function(data){
                    $scope.result = data.geonames;
                })
        CountryInfo.capitalData()
            .success(function(data){
                    $scope.capResult = data.geonames;
                })
        CountryInfo().neighborsData()
            .success(function(data){
                    $scope.neighborResult = data.geonames;
                })
        $scope.quantity = 3;
    })