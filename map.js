import {barycentreLatitude,barycentreLongitude,listeAdresseLatitude,listeAdresseLongitude,location} from "./barycentre.js";
// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = barycentreLatitude(listeAdresseLatitude);
var lon = barycentreLongitude(listeAdresseLongitude);
var map = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "map" et l'insèrer dans l'élément HTML qui a l'ID "map"
    map = new google.maps.Map(document.getElementById("map"), {
        // Nous plaçons le centre de la carte avec les coordonnées ci-dessus
        center: new google.maps.LatLng(lat, lon), 
        // Nous définissons le zoom par défaut
        zoom: 11, 
        // Nous définissons le type de carte (ici carte routière)
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        // Nous activons les options de contrôle de la carte (plan, satellite...)
        mapTypeControl: true,
        // Nous désactivons la roulette de souris
        scrollwheel: false, 
        mapTypeControlOptions: {
            // Cette option sert à définir comment les options se placent
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR 
        },
        // Activation des options de navigation dans la carte (zoom...)
        navigationControl: true, 
        navigationControlOptions: {
            // Comment ces options doivent-elles s'afficher
            style: google.maps.NavigationControlStyle.ZOOM_PAN 
        }
    });
}
window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
    var marker = new google.maps.Marker({
        // Nous définissons sa position (syntaxe json)
        position: {lat: lat, lng: lon},
        // Nous définissons à quelle carte il est ajouté
        map: map
    });
};