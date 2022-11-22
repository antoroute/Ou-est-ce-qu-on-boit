

function barycentreLatitude(listeAdresseLatitude){
    var latitude=0;
    for(var iterationLatitude=0;iterationLatitude<listeAdresseLatitude.length;iterationLatitude++){
        latitude+=listeAdresseLatitude[iterationLatitude];
    }
    return latitude/iterationLatitude;
}

function barycentreLongitude(listeAdresseLongitude){
    var longitude=0;
    for(var iterationLongitude=0;iterationLongitude<listeAdresseLongitude.length;iterationLongitude++){
        longitude+=listeAdresseLongitude[iterationLongitude];
    }
    return longitude/iterationLongitude;
}

var listeAdresseLatitude=[48.847644,48.875993,48.823252];
var listeAdresseLongitude=[2.352573,2.346739,2.355994];


console.log(barycentreLatitude(listeAdresseLatitude))
console.log(barycentreLongitude(listeAdresseLongitude))

