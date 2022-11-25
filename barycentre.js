var lat;
var lon;
navigator.geolocation.getCurrentPosition(success, error, options);

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    lat = crd.latitude;
    lon = crd.longitude;
}

function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

function barycentreLatitude(listeAdresseLatitude) {
    var latitude = 0;
    for (var iterationLatitude = 0; iterationLatitude < listeAdresseLatitude.length; iterationLatitude++) {
        latitude += listeAdresseLatitude[iterationLatitude];
    };
    if (listeAdresseLatitude.length == 0) {
        return lat;
    };
    return latitude / iterationLatitude;
}

function barycentreLongitude(listeAdresseLongitude) {
    var longitude = 0;
    for (var iterationLongitude = 0; iterationLongitude < listeAdresseLongitude.length; iterationLongitude++) {
        longitude += listeAdresseLongitude[iterationLongitude];
    };
    if (listeAdresseLongitude.length == 0) {
        return lon;
    };
    return longitude / iterationLongitude;
}

export {
    barycentreLatitude,
    barycentreLongitude
};