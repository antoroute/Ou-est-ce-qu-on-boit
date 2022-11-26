import {
    map,
    start,
    end
} from "./map.js";

var i = 0;

function calcRoute() {
    console.log(i);
    var S = window['Service' + i];
    var R = window['Renderer' + i];

    S = new google.maps.DirectionsService();
    R = new google.maps.DirectionsRenderer();

    var selectedMode = document.getElementById('mode').value;

    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode[selectedMode],
        unitSystem: google.maps.DirectionsUnitSystem.METRIC
    };
    S.route(request, function (result, status) {
        if (status == 'OK') {
            console.log(result);
            console.log(result.routes[0].legs[0].duration);
            console.log(result.routes[0].legs[0].duration.value);
            R.setDirections(result);
            R.suppressMarkers = true;
            R.setMap(map);
        }
    });
    i += 1;
}

export {
    calcRoute
};