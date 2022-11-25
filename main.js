import {
    initMap
} from "./map.js";
import {
    getadresse,
    listeAdresseLatitude,
    listeAdresseLongitude
} from "./adresses.js"
import {
    barycentreLatitude,
    barycentreLongitude,
} from "./barycentre.js"


window.onload = function () {
    initMap(barycentreLatitude(listeAdresseLatitude), barycentreLongitude(listeAdresseLongitude));
    getadresse();
};