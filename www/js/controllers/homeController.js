/**
 * Created by gkopevski on 11/10/14.
 */
'use strict';

Java2days.controller("HomeController", function ($scope,FoursquareService) {


    $scope.menu = [
        {
            "name":"Home",
            "link":"home"
        },
        {
            "name":"Maps",
            "link":"maps"
        }
    ];
    localStorage.setItem("menu",JSON.stringify($scope.menu));
    $scope.menu = JSON.parse(localStorage.getItem("menu"));

});