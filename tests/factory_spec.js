/**
 * Created by mozafff on 11/19/2014.
 */
describe("CountryInfo", function() {
    beforeEach(module('App'));
    beforeEach(module(function ($provide) {
        $provide.value('countriesData', {
            someVariable: 1
        });
    }));
    it('should query the API and get a list of the countries',
        inject(function(CountryInfo) {

        }));

});



// CountryInfo, $rootScope, $httpBackend

/*
 $httpBackend.expect('GET', '/api/username-available/johnny').respond(200);
 var status = false;
 usernameAvailable("johnny").success(function() {
 status = true;
 });
 $rootScope.$digest();
 $httpBackend.flush();
 expect(status).toBe(true);
 $httpBackend.verifyNoOutstandingRequest();
 */