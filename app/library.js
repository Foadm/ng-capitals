/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .constant('URL_PATH', 'http://api.geonames.org/countryInfoJSON?username=foadm_2000')
    .constant('COUNTRY_PATH', 'http://api.geonames.org/countryInfoJSON?username=foadm_2000&country=')
    .constant('CAPITAL_PATH', 'http://api.geonames.org/countryInfoJSON?username=mwhelan&country=')
    .constant('COUNTRY_NEIGHBORS', 'http://api.geonames.org/neighboursJSON?username=foadm_2000&country=')
    .factory("CountryInfo", function($http, URL_PATH, $q){
        debugger;
        return {
            getCountries : function(){

                var deferred = $q.defer();
                $http.get(URL_PATH)
                    .success(function(data){
                        data : data
                    });
                return deferred.promise;

            }
        }
    })
    .factory("countryDetail", function($route,$http, COUNTRY_PATH){
        var country_code = $route.current.params.country;
        var country_path = COUNTRY_PATH + country_code;
        var request = {
            callback: 'JSON_CALLBACK'
        };
        return function(){
            return $http({
                method: 'JSONP',
                url: country_path,
                cache: true,
                params: request
            })
        }

    })
    .factory("capitalDetail", function($route,$http, CAPITAL_PATH) {
        var country_code = $route.current.params.country;
        var capital_path = CAPITAL_PATH + country_code;
        var request = {
            callback: 'JSON_CALLBACK'
        };
        return function () {
            return $http({
                method: 'JSONP',
                url: capital_path,
                cache: true,
                params: request
            })
        }
    })
    .factory("countryNeighbors", function ($route,$http, COUNTRY_NEIGHBORS){
        var country_code = $route.current.params.country;
        var neighbors_path = COUNTRY_NEIGHBORS + country_code;
        var request = {
            callback: 'JSON_CALLBACK'
        };
        return function () {
            return $http({
                method: 'JSONP',
                url: neighbors_path,
                cache: true,
                params: request
            })
        }
    })