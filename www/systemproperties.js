/*jslint indent: 2 */
/*global window, jQuery, angular, cordova */

// Utilizzo: SystemProperties.isSystemGeolocationEnabled(function(a){alert(a);}, function(err){alert('err'+err);});

"use strict";

var SystemProperties = function () {
    this.name = "SystemProperties";
};

// Returns a jQuery or AngularJS deferred object, or pass a success and fail callbacks if you don't want to use jQuery or AngularJS
var getPromisedCordovaExec = function (command, success, fail) {
    var toReturn, deferred, injector, $q;
    if (success === undefined) {
        if (window.jQuery) {
            deferred = jQuery.Deferred();
            toReturn = deferred;
        } else if (window.angular) {
            injector = angular.injector(["ng"]);
            $q = injector.get("$q");
            deferred = $q.defer();
            toReturn = deferred.promise;
        } else {
            return console.error('SystemProperties either needs a success callback, or jQuery/AngularJS for executing promises.');
        }
        success = deferred.resolve;
        fail = deferred.reject;
    }
    // 5th param is NOT optional. must be at least empty array
    cordova.exec(success, fail, "SystemProperties", command, []);
    return toReturn;
};

SystemProperties.prototype.isSystemGeolocationEnabled = function (success, fail) {
    return getPromisedCordovaExec('isSystemGeolocationEnabled', success, fail);
};

SystemProperties.prototype.navigateToSystemLocation = function (success, fail) {
    return getPromisedCordovaExec('navigateToSystemLocation', success, fail);
};


module.exports = new SystemProperties();