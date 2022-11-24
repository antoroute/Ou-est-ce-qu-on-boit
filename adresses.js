import {initMap,rechercheBarProche} from "./map.js";
import {barycentreLatitude,barycentreLongitude} from "./barycentre.js"

var listeAdresseLatitude=[];
var listeAdresseLongitude=[];

var geocoder = new google.maps.Geocoder();

function getadresse(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams (queryString);

    const adresse = urlParams.getAll ('adresse');
    
    for (var i = 0; i < adresse.length; i++) {
        geocoder.geocode( { 'address': adresse[i]}, function(results, status) {
            //console.log(results[0]);  
            if (status == 'OK') {
              listeAdresseLatitude.push(results[0].geometry.viewport.Za.hi);
              listeAdresseLongitude.push(results[0].geometry.viewport.Ia.hi);
              console.log('adresse2');
              console.log(listeAdresseLatitude);
              console.log(listeAdresseLongitude);
              if (i = (adresse.length-1)){
                var la = barycentreLatitude(listeAdresseLatitude);
                var lo = barycentreLongitude(listeAdresseLongitude);
                rechercheBarProche({lat: la, lng: lo});
                initMap(la,lo);
              }
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    //listeAdresseLongitude,listeAdresseLatitude=codeAddress(adresse[i]);
    console.log('adresse');
    console.log(listeAdresseLatitude);
    console.log(listeAdresseLongitude);
    
}

export {getadresse,listeAdresseLatitude,listeAdresseLongitude};