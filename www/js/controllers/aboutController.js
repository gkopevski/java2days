/**
 * Created by gkopevski on 11/10/14.
 */
'use strict';

Java2days.controller("AboutController", function ($scope,$window) {

    $scope.menu = JSON.parse(localStorage.getItem("menu"));

    $scope.center= {
        lat:42,
        lng:21.433,
        zoom: 15
    };
    $scope.openstreetmap =  {
            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
    $scope.height = $window.innerHeight;
    $scope.width = $window.innerWidth;

});