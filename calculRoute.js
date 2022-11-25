import {
    map
} from "./map.js";

var directionsService = new google.maps.DirectionsService();
var directionsRenderer = new google.maps.DirectionsRenderer();

function calcRoute() {
    var selectedMode = document.getElementById('mode').value;
    var start = '711 W Jackson Blvd Chicago, IL 60661';
    var end = '555W W Harrison St Chicago, IL 60607';
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            console.log(result);
            console.log(result.routes[0].legs[0].duration);
            console.log(result.routes[0].legs[0].duration.value);
            directionsRenderer.setDirections(result);
            directionsRenderer.setMap(map);
        }
    });
}


export{calcRoute};