import {
    map
} from "./map.js";
import {
    start,
    end
} from "./nearbySearch.js";
var i = 0;

function calcRoute(adresse, listeBar) {
    console.log(listeBar);
    console.log(adresse);
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


//const months= ["1", "4", "7", "9"];
//const years = ["2021", "2022", "2027"];
//const dates = years.flatMap(year => {
//  return months.map(month => `${month}/1/${year}`);
//});
//console.log(dates);


export {
    calcRoute
};