/**
 * Created by gkopevski on 11/10/14.
 */
'use strict';

Java2days.controller("AboutController", function ($scope, $window, FoursquareService) {

    $scope.menu = JSON.parse(localStorage.getItem("menu"));

    $scope.markers = [];
    $scope.openstreetmap = {
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
    $scope.height = $window.innerHeight;
    $scope.width = $window.innerWidth;
    $scope.center = {
        lat: 42,
        lng: 21.433,
        zoom: 15
    };

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
            var i = 1;
        });





});