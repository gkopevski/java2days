/**
 * Created by gkopevski on 11/11/14.
 */

'use strict';
Java2days.factory("FoursquareService",function($http){

    var frousquareServices = {};

    var arts_Entertainment = "4d4b7104d754a06370d81259",
        foodAndDrink = "4d4b7105d754a06374d81259",
        nightLife = "4d4b7105d754a06376d81259",
        outdoorsAndRecreation="4d4b7105d754a06377d81259",
        shopsAndServices = "4d4b7105d754a06378d81259",
        travelAndTranspot = "4d4b7105d754a06379d81259";
    var clientId="5V0A4GCWI2BDB5LIA1OEJW4DOH3NVFPUVIVW4CWMCH0ZWZXU",
        client_secret="02U2I0PBBOOLOLWCPSKER3RVRJZRCNW0CLSZUYUHSKDUGHCV",
        v="20140603";


    var foursquareUrl ="https://api.foursquare.com/v2/venues/explore?";

    frousquareServices.getVenuesByCategory = function(latitue,longitude,categoryId){
        var url =foursquareUrl + "client_id=" + clientId + "&client_secret=" + client_secret + "&ll=" +latitue+"," + longitude + "&categoryId=" +categoryId + "&v=" + v;

        var config = {method: 'GET', url: url, cache: true};
        var promise = $http(config);
        return promise;
    };

    frousquareServices.categories = {
        "arts_Entertainment":arts_Entertainment,
        "foodAndDrink":foodAndDrink,
        "nightLife":nightLife,
        "outdoorsAndRecreation":outdoorsAndRecreation,
        "shopsAndServices":shopsAndServices,
        "travelAndTranspot":travelAndTranspot
    };

    return frousquareServices;

});