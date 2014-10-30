/**
 * Created by mozafff on 10/29/2014.
 */

angular.module('App', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/home/home.html',
            controller : 'HomeCtrl'
        })
            .when('/list', {
                templateUrl : 'views/list/list.html',
                //controller : 'ListCtrl'
            })
            .when('/detail', {
                templateUrl : 'views/detail/detail.html',
                //controller : 'DetailCtrl'
            })
            .otherwise({
                redirectTo : '/error'
            })
    });
