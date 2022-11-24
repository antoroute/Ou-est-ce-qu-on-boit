
function barycentreLatitude(listeAdresseLatitude){
    var latitude=0;
    for(var iterationLatitude=0;iterationLatitude<listeAdresseLatitude.length;iterationLatitude++){
        latitude+=listeAdresseLatitude[iterationLatitude];
    };
    if(listeAdresseLatitude.length==0){
        return 48.856614;
    };
    return latitude/iterationLatitude;
}

function barycentreLongitude(listeAdresseLongitude){
    var longitude=0;
    for(var iterationLongitude=0;iterationLongitude<listeAdresseLongitude.length;iterationLongitude++){
        longitude+=listeAdresseLongitude[iterationLongitude];
    };
    if(listeAdresseLongitude.length==0){
        return 2.3522219;
    };
    return longitude/iterationLongitude;
}

var radius = 500;
var location = {lat: 48.848963, lng: 2.3517686666666666};
var type = "Bar"

export {barycentreLatitude,barycentreLongitude,location,radius,type};