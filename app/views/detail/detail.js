/**
 * Created by mozafff on 10/29/2014.
 */
angular.module('App')
    .controller('DetailCtrl', function($scope, countryDetail,capitalDetail,countryNeighbors){
        $scope.getCountry = function(){ // I need to refactor this into a resolve function in the routes.js
            countryDetail().
                success(function(data){
                    $scope.result = data;
                })
        }
        $scope.getCapital = function(){ // I need to refactor this into a resolve function in the routes.js
            capitalDetail().
                success(function(data){
                    $scope.capResult = data;
                })
        }
        $scope.getNeighbors = function(){ // I need to refactor this into a resolve function in the routes.js
            countryNeighbors().
                success(function(data){
                    $scope.neighborResult = data;
                    console.log($scope.neighborResult);
                })
            $scope.quantity = 3;
        }
        $scope.getCountry();
        $scope.getCapital();
        $scope.getNeighbors();
    })