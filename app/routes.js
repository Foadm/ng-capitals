/**
 * Created by mozafff on 10/29/2014.
 */

angular.module('App', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/home/home.html',
            controller : 'HomeCtrl'
        })
            .when('/countries', {
                templateUrl : 'views/list/list.html',
                controller : 'ListCtrl'
            })
            .when('/countries/:country', {
                templateUrl : 'views/detail/detail.html',
                controller : 'DetailCtrl',
                resolve:{

                }
            })
            //.otherwise({
              //  redirectTo : '/error'
            //})
    });
