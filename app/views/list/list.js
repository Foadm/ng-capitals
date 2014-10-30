/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .controller('ListCtrl', function($scope,$rootScope, $location,CountryInfo){
        $scope.getCountries = function(){ // I need to refactor this into a resolve function in the routes.js
            CountryInfo().
                success(function(data){
                    $scope.result = data;
                })
        }
        $scope.getCountries();
        $scope.select_country = function(countryCode){
            $rootScope.$broadcast('send_country_code', countryCode);
            $location.path( "/countryCode" );
        }
    })