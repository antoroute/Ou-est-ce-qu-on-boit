import {
    initMap,
    rechercheBarProche
} from "./map.js";
import {
    getadresse,
    listeAdresseLatitude,
    listeAdresseLongitude
} from "./adresses.js"
import {
    barycentreLatitude,
    barycentreLongitude,
    conteur
} from "./barycentre.js"


window.onload = function () {
    initMap(barycentreLatitude(listeAdresseLatitude), barycentreLongitude(listeAdresseLongitude));
    getadresse();
};