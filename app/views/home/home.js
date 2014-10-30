/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .controller('HomeCtrl', function($scope,CountryInfo){
        $scope.submit = function(){
            CountryInfo().
            success(function(data){
                $scope.result = data;
            })
        }
    })

