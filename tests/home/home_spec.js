
describe('HomeCtrl function', function() {

    describe('HomeCtrl', function() {
        var $scope;

        beforeEach(module('App'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('HomeCtrl', {$scope: $scope});
        }));

        it('should set foo to be bar', function() {
            expect($scope.foo).toBe('bar');
        });
    });
});