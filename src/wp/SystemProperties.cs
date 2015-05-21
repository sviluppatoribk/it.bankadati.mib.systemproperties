using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Threading;
//using System.Device.Location;
using Windows.Devices.Geolocation;
using System.Windows;
using System.Windows.Navigation;
using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;


namespace Cordova.Extension.Commands
{
    public class SystemProperties: BaseCommand
    {
        // isSystemGeolocationEnabled
        public void isSystemGeolocationEnabled(string empty)
        {
            Geolocator myGeoLocator = new Geolocator();

            this.DispatchCommandResult(new PluginResult(PluginResult.Status.OK, !myGeoLocator.LocationStatus.Equals(PositionStatus.Disabled)));
        }

        // Navigazione a location
        public void navigateToSystemLocation(string empty)
        {
            Windows.System.Launcher.LaunchUriAsync(new Uri("ms-settings-location:"));
        }

    }
}