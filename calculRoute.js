import {
    map
} from "./map.js";
var i = 0;
var start;
var end;

function calcRoute(start, end) {

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
        falzar(1000);
        if (status == 'OK') {
            // console.log(result);
            // console.log(result.routes[0].legs[0].duration);
            console.log(result.routes[0].legs[0].duration.value);
            // R.setDirections(result);
            // R.suppressMarkers = true;
            // R.setMap(map);
        }
    });
    i += 1;
};

function falzar(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function determinationTrajet(adresse, listeBar) {

    // for (var i = 0; i < adresse.length; i++) {
    //     for (var j = 0; j < listeBar.length; j++) {
            
    //         calcRoute(adresse[i], listeBar[j]);
    //     };
    // };
    listeBar.flatMap(listeBar => {
        adresse.map(adresse => calcRoute(adresse, listeBar));
    });

};

//const months= ["1", "4", "7", "9"];
//const years = ["2021", "2022", "2027"];
//const dates = years.flatMap(year => {
//  return months.map(month => );
//});
//console.log(dates);

// start = adresse[0];
// end = listeBar[2];
// calcRoute(adresse,listeBar);
// start = adresse[1];
// end = listeBar[2];
// calcRoute(adresse,listeBar);

export {
    calcRoute,
    determinationTrajet
};