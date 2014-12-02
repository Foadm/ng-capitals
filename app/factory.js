/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .constant('URL_PATH', 'http://api.geonames.org/countryInfoJSON?username=foadm_2000')
    .constant('COUNTRY_PATH', 'http://api.geonames.org/countryInfoJSON?username=foadm_2000&country=')
    .constant('CAPITAL_PATH', 'http://api.geonames.org/countryInfoJSON?username=foadm_2000&country=')
    .constant('COUNTRY_NEIGHBORS', 'http://api.geonames.org/neighboursJSON?username=foadm_2000&country=')
    .factory('test', function(){
        return function(){
            return 'herrow'
        }
    })
    .factory("CountryInfo", function($http,$route, URL_PATH, COUNTRY_PATH,CAPITAL_PATH, COUNTRY_NEIGHBORS ){
        var request = {
            callback: 'JSON_CALLBACK'
        };
        return ({
            countriesData : countriesData,
            countryData : countryData,
            capitalData : capitalData,
            neighborsData : neighborsData
        });
        function countriesData(){
            return $http({
                method: 'JSONP',
                url: URL_PATH,
                cache: true,
                params: request
            })
        }
        function countryData(){
            var country_code = $route.current.params.country;
            var country_path = COUNTRY_PATH + country_code;
            return $http({
                method: 'JSONP',
                url: country_path,
                cache: true,
                params: request
            })
        }
        function capitalData(){
            var country_code = $route.current.params.country;
            var capital_path = CAPITAL_PATH + country_code;
            return $http({
                method: 'JSONP',
                url: capital_path,
                cache: true,
                params: request
            })
        }
        function neighborsData(){
            var country_code = $route.current.params.country;
            var neighbors_path = COUNTRY_NEIGHBORS + country_code;
            return $http({
                method: 'JSONP',
                url: neighbors_path,
                cache: true,
                params: request
            })
        }

    })

