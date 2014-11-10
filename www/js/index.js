'use strict';

function logDebug(message) {
    if (debug) {
        console.log(message);
    }
}


var onAngularReady = function(){
    angular.element(document).ready(function() {
        logDebug('angular.bootstrap');
        angular.bootstrap(document, ['Java2days']);
    });

};
var app = {
    // Application Constructor
    initialize: function() {
        if(deviceType){
            this.bindEvents();
        }else{
            onAngularReady();
        }
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        onAngularReady();
    }
};
