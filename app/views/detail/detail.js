/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .controller('DetailCtrl', function($scope, $routeParams){
        $scope.country_code = $routeParams.country;
    })