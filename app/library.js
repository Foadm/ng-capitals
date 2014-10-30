/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .constant('URL_PATH', 'http://api.geonames.org/countryInfoJSON?username=foadm_2000')
    .factory("CountryInfo", function($http, URL_PATH){
        var request = {
            callback: 'JSON_CALLBACK'
        };
        return function(){
            return $http({
                method: 'JSONP',
                url: URL_PATH,
                params: request
            })
        }
        .factory("countryDetail", function($http,$routeParams, $scope){
                $scope.country_code = $routeParams.country;
                return function(){console.log($scope.country_code);}

            })
    })
