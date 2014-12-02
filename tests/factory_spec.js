/**
 * Created by mozafff on 11/19/2014.
 */
describe("test", function() {
    beforeEach(module('App'));
    it('should return "herrow" when called', function(){
        inject(function(test){
           expect(test()).toBe("herrow");
        });
    });
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