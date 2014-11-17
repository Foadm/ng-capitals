/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .controller('ListCtrl', function($scope,CountryInfo){
        CountryInfo.countryData.then(function(result){
            $scope.result  = result.geonames;
        });

    })