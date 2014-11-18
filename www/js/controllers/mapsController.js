/**
 * Created by gkopevski on 11/10/14.
 */
'use strict';

Java2days.controller("MapsController", function ($scope, $window, FoursquareService) {

    $scope.menu = JSON.parse(localStorage.getItem("menu"));

    $scope.markers = [];
    $scope.height = $window.innerHeight;
    $scope.width = $window.innerWidth;
    $scope.center = {};
    var defaultLat = 42,
        defaultLng = 21.433;

    navigator.geolocation.getCurrentPosition(onSuccessGeoLocation, onErrorGeolocation, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });

    function onSuccessGeoLocation(position) {
        $scope.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            zoom: 15
        };
        showOurCurrentLocation();
        loadNighLife();
    }

    function onErrorGeolocation(error) {
        logDebug("Error getting geolocation: " + JSON.stringify(error));
        $scope.center = {
            lat: defaultLat,
            lng: defaultLng,
            zoom: 15
        };
        showOurCurrentLocation();
        loadNighLife();
    }

    function loadNighLife(){
        $scope.nightLife = FoursquareService.getVenuesByCategory($scope.center.lat, $scope.center.lng, FoursquareService.categories.nightLife).then(
            function (success) {
                success.data.response.groups[0].items.forEach(function (place) {
                    $scope.markers.push({
                        lat: place.venue.location.lat,
                        lng: place.venue.location.lng,
                        message: place.venue.name
                    });
                });
            },
            function (error) {
            });
    }

    function showOurCurrentLocation() {
        $scope.markers.push({
            lat: $scope.center.lat,
            lng: $scope.center.lng,
            message: "Our current location"
        });
    }
});